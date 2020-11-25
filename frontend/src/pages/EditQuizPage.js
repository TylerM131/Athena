import React, { useState } from 'react';
import Popup from "reactjs-popup";
import Header from '../components/Header';
import './NewQuizPage.css';
import HelpEditQuiz from '../components/HelpEditQuiz';




/* ********    TO DO /FIND THE ID/ ***********
    id = null;
*/



const EditQuizPage = () =>
{
    const appName = 'athena18'
    function buildPath(route){
    if(process.env.NODE_ENV ==='production'){
      return 'https://' + appName + '.herokuapp.com/' + route;
    }
    else{
      return 'http://localhost:5000/' + route; 
    }
  }
  var id;
  var name;
  var cards;


  const doEditSet = async event =>{
      event.preventDefault();
      cards = questions;
      //name = document.getElementById("quiz-title").innerHTML;
      //name = "test";
      var obj = {_id:id, Name:name.value, Cards:cards};
      var js = JSON.stringify(obj);

        var userInfo = localStorage.getItem('user');
        var data= JSON.parse(userInfo); 
        
        try{
            const response = await fetch(buildPath('api/editset'), {method:'POST', body:js,headers:{'Content-Type': 'application/json', 'authorization': ('BEARER '+ data.accessToken)}});
            var res = JSON.parse(await response.text());

            if(res.error){
                document.getElementById('addError').innerHTML = res.error;
            }
            console.log("made it!")
            

        }
        catch(e){
            return;
        }
  }



    
    var [questions, setQuestions] = useState([{Question: "", Answer: ""},]);

    const saveQuiz = async event => {
        event.preventDefault();

        /* TO DO */

        window.location.href="./MyQuizzes";
    };

    const addQuestion = async event => {
        event.preventDefault();

        /* TO DO */
        /* Add {quest: "", answer: ""} to the questions array */

        const item = {Question: "", Answer: ""}
        setQuestions(questions => [...questions, item])
    };

    function removeQuestion(e) {
    

        /* TO DO */
        /* If question.length > 1, remove the selected element from the questions array. If question.length === 1, alert the user saying "You can't remove the only question" */

        if (questions.length === 1)
        {
            alert("You can't remove the only question");
        }
        else
        {
            // /* Add values from text boxes to questions array */
            // for (var j = 0; j < questions.length; j++)
            // {
            //     let id = "quiz-questions-" + j.toString();
            //     questions[j].quest = document.getElementById(id).value;
            // }
            
            /* Remove the selected element from the questions array*/
            questions.splice(e.target.id-1,1);
            questions = questions
            setQuestions(questions => [...questions]);
            
        }
    };


    var i = 0;

    const renderQuestion = (question, index) =>
    {
        i++;
        var nameq = "quiz-question-" + i.toString();
        var namea = "quiz-answer-" + i.toString();
        var idq = "quiz-questions-" + i.toString();
        var ida = "quiz-answer-" + i.toString();
        var placeholderq = "Question " + i.toString();
        var placeholdera = "Answer " + i.toString();
        var val = "" + i.toString();

        return (
            <tr key={index}>
                <textarea className="short-inputs" name={nameq} id={idq} placeholder={placeholderq}/>
                <textarea className="short-inputs" name={namea} id={ida} placeholder={placeholdera}/>
                <a className="remove-question" onClick={removeQuestion}><img id={val} className="clickable-icon" alt="Remove" src={require("../img/remove.png")}/></a>
                
                <script>
                    if (i===questions.length)
                        i=0
                </script>
            
            </tr>
        )
    }

    return (
        <div>
            <div className="container-fluid vh-100">
                <div className="row">
                    <div className="col-3 column1 vh-100">
                        <Popup trigger={
                            <a className="help">
                                <img className="help-icon" alt="Help" src={require("../img/help.png")}/>
                            </a>
                        } position="top right">
                            <HelpEditQuiz />
                        </Popup>
                    </div>

                    <div className="col-6 column2 vh-100">
                        <form className="save-quiz-form">
                            <input type="text" className="long-inputs" id="quiz-title" placeholder="Quiz Title"/>
                            <a className="save-quiz" onClick={doEditSet}><img className="clickable-icon" alt="Save" src={require("../img/save.png")}/></a>

                            <div className="questions-answers">
                                <table className="add-edit-table">
                                    <tbody>
                                        {questions.map(renderQuestion)}
                                        <a className="add-question" onClick={addQuestion}><img className="clickable-icon" alt="Add" src={require("../img/add.png")}/></a>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>

                    <div className="col-3 column3 vh-100"></div>
                </div>
            </div>
            <Header />
        </div>

    );
};

export default EditQuizPage;