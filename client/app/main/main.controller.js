'use strict';

angular.module('simonExerciseApp')

.factory('SimonDTO', function() {

      function Simon() {
        this.pallet = [

          { color: "red", active: false },
          { color: "blue", active: false },
          { color: "yellow", active: false },
          { color: "green", active: false }

        ];
        this.palletIndex = "";
        this.arrayForButton = [];
        this.currentColor = "";
        this.allChoices = [];
      }

      Simon.prototype.says = function () {
        var num = this.pallet.length;
        this.palletIndex = Math.ceil( Math.random() * num ) - 1;
        this.currentColor = this.pallet[this.palletIndex];
        this.allChoices.push(this.currentColor);
      }

      return Simon;
    })

    .factory('PlayerDTO', function() {

      function Player() {
        this.says = "";
        this.allChoices = [];
        this.turn = false;
        this.game = false;
      }

      Player.prototype.select = function(obj) {
        this.says = obj;
        this.allChoices.push(this.says);
      }

      return Player;
    })

    .service('effects', function($timeout) {
      var self = this;

      self.buttonEffect = function(obj, time) {
        time = time || 400;
        obj.active = true;
        $timeout(function() { 
          obj.active = false;
        }, time);
      }

    })

.controller('MainController', function ($timeout, SimonDTO, PlayerDTO, effects) {
  var self = this;
      self.buttonEffect = effects.buttonEffect;
      self.simonSequence = effects.simonSequence;

      self.initializeGame = function() {
        self.simon = new SimonDTO;
        self.player = new PlayerDTO;
        self.result = "";
        self.player.game = false;
      }

      self.gameCycle = function() {
        self.player.game = true;
        self.player.turn = false;
        self.player.allChoices = [];
        self.simon.says();
        self.simonSequence(self.simon.allChoices, self.player.turn);
      }


      self.simonSequence = function(array, counter, time) {
        counter = counter || 0;
        time = time || 500;
        
        if ( counter == array.length ) {
          return self.player.turn = true;
        }

        $timeout(function() {
          
          self.buttonEffect(array[counter]);
          counter ++

          $timeout(function() {
            self.simonSequence(array, counter);
          }, time);

        }, time);
      }


      self.playerInput = function(obj) {
        if ( self.player.turn == true ) {
          self.buttonEffect(obj);
          self.player.select(obj);
          self.checkSelections();
        }
      }

      self.checkSelections = function() {
        
        var playerChoice = self.player.allChoices[self.player.allChoices.length - 1];
        var simonChoice = self.simon.allChoices[self.player.allChoices.length - 1];
        
        if ( playerChoice.color == simonChoice.color ) { 

          self.result = "Correct!";
          self.roundLength();

        } else {

          self.result = "Wrong"
          self.player.game = false;
          self.initializeGame();

        }
      }

      self.roundLength = function() {
        if (self.player.allChoices.length == self.simon.allChoices.length) {
          $timeout(function() {
            self.gameCycle();
          }, 500);
        } 
      }

      self.welcome = "Simon Says";
      self.initializeGame();

});
