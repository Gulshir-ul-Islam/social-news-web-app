class Link {
    title: string;
    url: string;
    author: string;
    constructor(title: string, url: string, author: string){
        let absoluteUrl = url;
        if(!absoluteUrl.startsWith("https://") && !absoluteUrl.startsWith("http://")){
            absoluteUrl = `http://${url}`;
        }
        this.title = title;
        this.url = absoluteUrl;
        this.author = author;
    }

    toString(){
        return `${this.title} (${this.url}). Author: ${this.author}`;
    }
}

let links : Link[] = [];
const link1 = new Link("Hacker News", "https://news.ycombinator.com", "Baptiste");
const link2 = new Link("Reddit", "https://reddit.com", "Thomas");
const link3 = new Link("Boing Boing", "boingboing.net", "Daniel");

links.push(link1); links.push(link2); links.push(link3);

const showLinks = (links: Link[]) : void =>{
    if(links.length > 0){
        for(let idx=0;idx<links.length;idx++){
            alert(`${idx+1}: ${links[idx]?.toString()}`)
        }
    }
    else {
        alert("No links to display!");
    }
}

const createAndAddLink = () : void => {
      const title = String(prompt("Enter the link title:"));
      const url = String(prompt("Enter the link url:"));
      const author = String(prompt("Enter the link author:"));
      // Add new link to array
      links.push(new Link(title, url, author));
}

const removeLink = (links: Link[]) : void => {
    if (links.length > 0) {
        // Input link index (must be between 1 and the number of links)
        let index = -1;
        const maxIndex = links.length;
        while (index < 1 || index > links.length) {
          index = Number(
            prompt(`Enter the index of the link to be removed (between 1 and ${maxIndex}):`)
          );
        }
        // Remove selected link from array
        links.splice(index - 1, 1);
      } else {
        alert("No links to remove!");
      }
}

let choice;
while(choice !== '0'){
    let choices = "\n1 : Show links";
    choices += "\n2 : Add a link";
    choices += "\n3 : Remove a link";
    choices += "\n0 : Quit";

    choice = prompt(`Choose an option: ${choices}`);

    switch(choice) {
        case '1': {
            showLinks(links);
            break;
        }
        case '2': {
            createAndAddLink();
            break;
        }
        case '3': {
            removeLink(links);
            break;
        }
    }
}

alert("See you later!");