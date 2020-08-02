function PartyAnimal(){
    //we can make the class as constructor by adding parameter
    this.x = 0;
    this.party = function(){
        this.x++;
    }
}

an = new PartyAnimal();
an.party();
an.party();
