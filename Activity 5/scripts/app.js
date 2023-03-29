(function() {

    console.log("Loaded app.js");
    
    //Create JSON package data (normally this would be fetched from a server)
    const data = [
        
        {
            name: "GitLens",
            description: "The GitLens extension is truly amazing; it enables you to visualize code authorship within VS Code. You can browse and explore the history of a file, view a git blame annotation for each file line, and even add a changes (diff) hover annotation, all of which are fully customizable.",
            author: "GitKraken ✅",
            url: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
            downloads:  21810439,
            stars: 4,
            price: 0,
            selector: "p0"
        },
        {
            name: "ESLint",
            description: "This extension integrates ESLint into VS Code, and it requires you to have already installed ESLint on your computer either locally or globally. You can do this with npm, by running npm install -g eslint. There are more detailed configuration and installation settings and instructions on the Visual Studio Code extension marketplace page.",
            author: "Microsoft ✅",
            url: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
            downloads: 172290,
            stars: 3.5,
            price: 0,
            selector: "p1"
        },
        {
            name: "Settings Sync",
            description: "The Settings Sync extension, previously known as Visual Studio Code Settings Sync, synchronizes settings, snippets, themes, keybindings, workspaces, extensions, and more across multiple machines. I think this is probably one of the most important and useful extensions that ensures no matter what computer you're on, you can have all the tooling you're used to.",
            author: "Shan Khan",
            url: "https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync",
            downloads: 3676102,
            stars: 4.5,
            price: 0,
            selector: "p2"
        },
        {
            name: "stylelint",
            description: "stylelint is an extension that lints CSS, SCSS, and Less. You can control whether stylelint is enabled for different languages or not, depending on how you wish to configure it's settings.",
            author: "Stylelint ✅",
            url: "https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint",
            downloads: 1262142,
            stars: 4.7,
            price: 0,
            selector: "p3"
        },
        
        {
            name: "TSlint",
            description: "This new version of TSLint is similar to the previous extension, in that it requires that you already have TSLint installed locally in a project, or globally on your computer. This extension integrates the TSLint linter for the TypeScript language into VS Code.",
            author: "Microsoft ✅",
            url: "https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin",
            downloads: 3756719,
            stars: 3,
            price: 0,
            selector: "p4"
        },
        
        {
            name: "HTML Snippets | ⚠️ Not Found",
            description: "HTML Snippets adds in rich language support for HTML markup, including snippets, quick info, and descriptions that include whether a tag is deprecated.",
            author: "Not Found",
            url: "https://marketplace.visualstudio.com/items?itemName=wgenial.html-snippets",
            downloads: NaN,
            stars: NaN,
            price: NaN,
            selector: "p5"
        },
        {
            name: "Trailing Spaces",
            description: "What's in a name? Well, the Trailing Spaces extension does pretty much exactly what the title describes—it enables you to highlight trailing spaces and remove them quickly. This extension is a port of the popular Sublime Text plugin Trailing Spaces, and offers quick deletion of trailing spaces, trim on save, and more.",
            author: "Shardul Mahadik",
            url: "https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces",
            downloads: 1343329,
            stars: 5,
            price: 0,
            selector: "p6"
        },
        {
            name: "Blank Line at the End of File",
            description: "Blank Line at the End of File is a minimal and super simple extension that adds an extra blank line at the end of any saved file.",
            author: "riccardoNovaglia",
            url: "https://marketplace.visualstudio.com/items?itemName=riccardoNovaglia.missinglineendoffile",
            downloads: 23922,
            stars: 3,
            price: 0,
            selector: "p7"
        },
        {
            name: "Liquid",
            description: "The Liquid extension is a must have for those developing Shopify themes using VS Code. Though there's support for sidebar icons to distinguish Liquid files out-of-the-box, VS Code doesn't have syntax highlighting for Liquid without the help of this extension. This extension adds syntax highlighting for Liquid, and acts as a support for the Shopify Liquid Snippets extension. It also supports section code blocks, and snippet auto-completion for Liquid tags and filters.",
            author: "Neil Ding",
            url: "https://marketplace.visualstudio.com/items?itemName=neilding.language-liquid#overview",
            downloads: 172290,
            stars: 3.5,
            price: 0,
            selector: "p8"
        },
        {
            name: "Shopify Liquid Template Snippits",
            description: "The Shopify Liquid Template Snippets extension includes various Liquid snippets to make developing themes faster. This includes snippets for control flow tags, iteration tags, variable tags, array filters, and more. This extension has one dependency, the Liquid extension.",
            author: "Franky Lau",
            url: "https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets",
            downloads: 122623,
            stars: 5,
            price: 0,
            selector: "p9"
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
            return `| ${this.downloads.toLocaleString()} downloads`;
        }

        this.getFormattedStars = function () {
            return `| ${this.stars.toLocaleString()} stars`;
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