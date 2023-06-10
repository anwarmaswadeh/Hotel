
class Room {
    floorNum;
    roomNum;
    Price;
    #isBooked;
    constructor(floorNum,roomNum,Price,isBooked){
        this.floorNum = floorNum;
        this.roomNum = roomNum;
        this.Price = Price;
        this.#isBooked = isBooked;
    }

    set isBooked(isBooked){
        this.#isBooked = isBooked;
    }

    get isBooked(){
        return this.#isBooked;
    }
    
    printRoom (){
        console.log(" Room: " + this.roomNum +" Floor: " + this.floorNum + " Price: " + this.Price);
    }

    book(){
        this.#isBooked = true;
    }
    isBooked(){
        return this.#isBooked;
    }
}

class RoomWithView extends Room{
    view;
    numberOfBeds;
    constructor(floorNum,roomNum,Price,isBooked,view,numberOfBeds){
        super(floorNum,roomNum,Price,isBooked);
        this.view = view;
        this.numberOfBeds = numberOfBeds;
    }
}

class sleepingRoom extends Room{
    personCapacity;
    constructor(floorNum,roomNum,Price,isBooked,personCapacity){
        super(floorNum,roomNum,Price,isBooked);
        this.personCapacity = personCapacity;
    }
}

class Hotel {
    address;
    NumberOfRooms;
    #minFloor;
    #maxFloor;
    rooms =[Room];

    constructor(address,NumberOfRooms,minFloor,maxFloor , rooms){
        this.address = address;
        this.NumberOfRooms = NumberOfRooms;
        this.#minFloor = minFloor;
        this.#maxFloor = maxFloor;
        this.rooms = rooms;
    }

    set minFloor(minFloor){
        this.#minFloor = minFloor;
    }

    get minFloor(){
        return this.minFloor;
    };

    set maxFloor(maxFloor){
        this.#maxFloor = maxFloor;
    }

    get maxFloor(){
        return this.maxFloor;
    };

    printAdvertisemen(){
        console.log("Welcom to " + this.address + " Hotel" 
        + "\n" + "Number of rooms: "  + this.NumberOfRooms
        + "\n" + "Min floor: " +  this.#minFloor 
        + "\n" + "Max floor: "+ this.#maxFloor);
    }

    listBookedRoom(){
        console.log("Booked room: ");
        for (var i = 0; i < this.rooms.length; i++){
           if (this.rooms[i].isBooked() == true){
                console.log("Floor: "+this.rooms[i].floorNum + " " +" Room number: "+ this.rooms[i].roomNum);
            }
        }
    }
}

const r1 = new Room(1, 101, 100, false );
r1.printRoom();
r1.isBooked();
console.log(r1.isBooked());

const r2 =new sleepingRoom(1, 102, 100, false, 1);
r2.printRoom();
r2.book();
console.log(r2.isBooked());

const r3 = new RoomWithView(1, 103, 300, false, "sea", 2);
r3.printRoom();
r3.book();
console.log(r3.isBooked());

const r4 = new Room(2, 201, 150, false );
r4.printRoom();
r4.book();
console.log(r4.isBooked());

const r5 =new sleepingRoom(2, 202, 150, false, 2);
r5.printRoom();
r5.isBooked();
console.log(r1.isBooked());

const r6 = new RoomWithView(2, 203, 350, false, "garden", 3);
r6.printRoom();
r6.isBooked();
console.log(r6.isBooked());

const r7 = new Room(3, 301, 200, false);
r7.printRoom();
r7.book();
console.log(r7.isBooked());

const r8 = new sleepingRoom(3, 302, 250, false, 3);
r8.printRoom();
r8.book();
console.log(r8.isBooked());

const r9 = new RoomWithView(3, 303, 400, false, "mountin", 2 );
r9.printRoom();
r9.book();
console.log(r9.isBooked());

const h1= new Hotel("Ramallah", 50, 0, 5, [r1,r2,r3,r4,r5,r6,r7,r8,r9]);
h1.printAdvertisemen();
h1.listBookedRoom();