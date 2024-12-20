console.log("Test...Let's see how this goes!")

let gameData = {
    cookieCount: 0,
    cookiesPerSecond: 0,
};

const cookieButton = document.getElementById("cookie-increment-button");
cookieButton.addEventListener("click", incrementCookie);
function incrementCookie() {
gameData.cookieCount++;


// !Emine's function as reference 
//increasebutton.addEventListener("click", buycookie);
// function buycookie() 
// {cookiesPerSecond++;
//   increasecookie.innerText = cookiesPerSecond;}
}

const upgradesContainer = document.getElementById("upgrades-shop-container");
async function getShopUpgrades() {
    const result = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades");
        console.log("HTTP Response:", result);
        const data = await result.json();
        console.log("Data", data);

      // We now need to translate the data we recieve from JSON to something we can use!
  //   const data = await [FINISH THIS CODE] x
  //   return [FINISH THIS CODE]
  //We need to *PUSH* the upgrade times that we got from our fetch, into our empty array!
  //Remember that the upgrades that we fetched will be known by a variable name that you have set on line 30/31 ^
}
getShopUpgrades()

const shopUpgradesArray = [];
shopUpgradesArray.push("Data");
//fill with upgrades from API
console.log(shopUpgradesArray);
//!Alex helped me with this - I think it puts data in to the array.
// CHECK CONSOLE: 2 arrays were made, not sure how to get the upgrade shop items into the Array(1)


//This is where you should go back to your WK2 gallery loop and apply the same logic to this loop!
    // const upgradeName = [FINISH THIS CODE]
    // const upgradeCost = [FINISH THIS CODE]
    // const upgradeCPSIncrease = [FINISH THIS CODE]
    //These elements should be ones that just display text...
    //These are brand new elements that don't cantain any content so we need to assign content to them. Exactly the same strategy as when you assigned a src and alt to the thumbnail images in WK2...
    //These values come from the upgrade objects inside our array (the ones we just pushed in there from our API)
    // instead of giving these elements a src and alt we want to give them some *TEXTCONTENT* <--- BREADCRUMB TO FOLLOW
    // Append these elements into the relevant container in the same way as you appended your imgs into the thumbnail container in WK2...
    //This is a decent place to also create a button element and attach an event listener to it! You will then need to create a handler function for the button that you create!