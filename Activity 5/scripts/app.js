(function() {

    console.log("Loaded app.js");
    
    //Create JSON package data (normally this would be fetched from a server)
    const data = [
        {
            name: "Settings Sync",
            description: "The Settings Sync extension, previously known as Visual Studio Code Settings Sync, synchronizes settings, snippets, themes, keybindings, workspaces, extensions, and more across multiple machines. I think this is probably one of the most important and useful extensions that ensures no matter what computer you're on, you can have all the tooling you're used to.",
            author: "Shan Khan",
            url: "https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync",
            downloads: 3676102,
            stars: 4.5,
            price: 0,
            selector: "p1"
        },
        {
            name: "Shopify Liquid Template Snippits",
            description: "The Shopify Liquid Template Snippets extension includes various Liquid snippets to make developing themes faster. This includes snippets for control flow tags, iteration tags, variable tags, array filters, and more. This extension has one dependency, the Liquid extension.",
            author: "Franky Lau",
            url: "https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets",
            downloads: 122623,
            stars: 5,
            price: 0,
            selector: "p2"
        }
    ]

    //Package Constructor
    function Package(data)
    {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return `${this.downloads.toLocaleString()} downloads`;
        }

        this.getFormattedStars = function () {
            return `${this.stars.toLocaleString()} stars`;
        }
    }

    //Utility Functions
    const GetTodaysDate = function() {
        const today = new Date();
        return today.toDateString();
    }

    const WritePackageInfo = function(package)
    {
        console.log(package);

        //Get reference to DOM elements
        const selector = package.selector,
        nameEL = document.getElementById(`${selector}-name`),
        descEl = document.getElementById(`${selector}-description`),
        authEl = document.getElementById(`${selector}-author`),
        dwnlEl = document.getElementById(`${selector}-downloads`),
        starEl = document.getElementById(`${selector}-stars`);

        //Write package data to DOM elements
        nameEL.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        dwnlEl.textContent = package.getFormattedDownloads();
        starEl.textContent = package.getFormattedStars();
    }

    //Write Date
    dateEl = document.getElementById(`date`)
    dateEl.textContent = GetTodaysDate();
    
    for(let i = 0; i < data.length; i++)
    {
        const package = new Package(data[i]);
        WritePackageInfo(package);
    }
}());