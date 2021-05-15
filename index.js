const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
 
 const totalBatteries = [4].reduce(function(addition, element){
        return element * 7 + addition}, 3);

