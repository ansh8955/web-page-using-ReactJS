
const H2 = React.createElement('h2',{

    style:{
        color:'rgb(27,27,27)',
        fontSize:'50px',
        textAlign:'start'

    },
},'Learn web development');


const Para1 = React.createElement('p',{
    style:{
        marginBottom:'30px',
        textAlign:'start',
        fontSize:'19px',
        lineHeight:'1.6rem'

    

    }
},'Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.');

const Para2 = React.createElement('p',{
    style:{
        marginBottom:'30px',
        textAlign:'start',
        fontSize:'19px',
        lineHeight:'1.6rem'


    }
},'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from ', React.createElement('a', { href: 'https://developer.mozilla.org/' }, 'the rest of MDN'), ', and other intermediate to advanced resources that assume a lot of previous knowledge.');

const Para3 = React.createElement('p',{
    style:{
        marginBottom:'30px',
    textAlign:'start',
    fontSize:'19px',
    lineHeight:'1.6rem'

        
    }
},'If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.');

const mainDivStyle = {
width:'51%',
    margin:'10%',
    marginTop:'0%',
    padding:'5%',
    paddingTop:'0%',

}
const div1 = React.createElement('div',{},[Para1]);
const div2 = React.createElement('div',{},[Para2]);
const div3 = React.createElement('div',{},[Para3]);


const mainDiv = React.createElement('div',{

    style:mainDivStyle
},[H2,div1,div2,div3]);


ReactDOM.render(mainDiv,document.getElementById('root'));