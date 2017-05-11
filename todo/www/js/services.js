angular.module('starter.services', [])

.factory('Chats', function(){

    // Might use a resource here that returns a JSON array

    //Fake data testing

    va chats = [{
        id: 0,
        name: 'Jon Snow',
        lastText: 'Winter is cometh',
        face: 'img/jon.png'
    },{

        id: 1,
        name: 'Jamie Lannister',
        lastText: 'Winter has cometh',
        face: 'img/jami.png'
    }, {

        id: 2,
        name: 'White Walker',
        lastText: 'Winter is here',
        face: 'img/whitewalker.png'
    },{

        id: 3,
        name: 'Daenerys',
        lastText: 'Tales of Fire',
        face: 'img/daedae.png'
    },{
        id: 4,
        name: 'Cersei',
        lastText: 'Burn them all',
        face: 'img/daedae.png'
    }];


    return {

        all: function(){
            return chats;
        },
        remove: function(chat){

            chats.splice(chats.indexOf(chat),1);
        },
        get: function(chatId){
            for (var i = 0; i < chats.length; i++){

                if (chats[i].id === parseInt(chatId)){

                    return chats[i];
                }
            }

            return null;

        }
    };
});