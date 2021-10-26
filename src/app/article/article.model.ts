export class Article{
    votes: number;
  title: string;
  link: string;
  constructor(link:string,votes:number,title:string) { 
    this.link =link;
    this.votes = votes || 0 ;
    this.title = title;
  }
  voteUp():boolean{
    this.votes+=1;
    return false;
  }
  voteDown():boolean {
    this.votes-=1;
    return false;
  }

  domain():string{
    try{
      const domainAndPath:string =this.link.split("//")[1];
      return domainAndPath.split("/")[0];
    }
    catch(err){
      return "";
    }
  }

}