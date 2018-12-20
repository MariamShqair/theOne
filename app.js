var fs=require("fs")

function Read(storyValue){
    let story = fs.readFileSync(storyValue).toString().split(" ")
    return story
}

function Remove(story){
    let stopwords = fs .readFileSync('stopwords.txt').toString().split(",")
    storyAfterRemove=[]
    for(let i in story)
        if(!stopwords.includes(story[i])){
            storyAfterRemove.push(story[i])
        }
    return storyAfterRemove
    
}

function Freq(story){
    let storyAfterFreq=[]
    for(let i in story){
       let findWord=storyAfterFreq.find(object => object.key === story[i])
        if(findWord){
            findWord.count++
        }else{
            storyAfterFreq.push({key:story[i],count:1})
        }
    }
    return storyAfterFreq
    
}

function Sort(storyAfterFreq){
   return  storyAfterFreq.sort((a,b) =>  b.count - a.count)
}

class theOne{

    constructor(v){
        this.value = v;
    }
    bind(func)
    {
        this.value = func(this.value)
        return this
    }
    print(){
        console.log(this.value);
    }
}

let myo = new theOne("story.txt");

myo.bind(Read)
    .bind(Remove)
    .bind(Freq)
    .bind(Sort)
    .print()

