import React, { useState } from 'react';
import Popup from "reactjs-popup";
import Header from '../components/Header';
import './ViewUserPage.css';
import HelpViewQuiz from '../components/HelpViewQuiz';

const MyQuizzesPage = () =>
{
    // const viewQuiz = async event => {
    //     event.preventDefault();

    //     window.location.href="./ViewQuiz";
    // };

    // delete later and use above
    const viewQuiz = async event => {
        event.preventDefault();

        alert("View this quiz!");
    };

    const [searchQuizLiked, setSearchQuizLiked] = useState(0);

    var initialQuizzes = [
        {title:"a"},
        {title:"b"},
        {title:"c"},
        {title:"a"},
        {title:"b"},
        {title:"c"},
        {title:"a"},
        {title:"b"},
        {title:"c"},
        {title:"a"},
        {title:"b"},
        {title:"c"},
        {title:"a"},
        {title:"b"},
        {title:"c"},
        {title:"a"},
        {title:"b"},
        {title:"c"},
    ]


    var [isFollowing, setIsFollowing] = useState(0); // determine this initial value from the API

    var [quizzes, setQuizzes] = useState(initialQuizzes);

    const renderQuizzes = (quiz, index) =>
    {
        return (
            <tr className="myQuizRow" key={index}>
                <div className="myQuiz">
                    <button className="quizButton" onClick={viewQuiz}>{quiz.title}</button>
                </div>
            </tr>
        )
    }

    return (
        <div>
            <div className="container-fluid vh-100">
                <div className="row">
                    <div className="col-3 column1 vh-100">

                        <form className="search-bar-form">
                            <input type="text" className="search-bar" placeholder="Search Quiz By Title"/>
                            <a className="search-button" ><img className="clickable-icon search-icon" alt="Search" src={require("../img/search.png")}/></a>
                        </form>

                        <div className="search-filters-div">
                            <h3 className="search-filters"> Search Filter</h3>
                            <a className="filter-like-button" onClick={() => setSearchQuizLiked(1 - searchQuizLiked)}><img className="clickable-icon filter-like-icon" alt="Search By Users You're Following" src={searchQuizLiked ? require("../img/addlikefull.png") : require("../img/addlikeempty.png")}/></a>
                        </div>

                        <div className="follow-user-button-div">
                            {/* This onClick function should also make an API call to add or remove the user from the following list */}
                            <a className="follow-user-button" onClick={() => setIsFollowing(1 - isFollowing)}><img className="clickable-icon follow-user-icon" alt="Follow User" src={isFollowing ? require("../img/adduserfull.png") : require("../img/adduserempty.png")}/></a>
                        </div>
                        

                        <div className="follower-count-div">
                            <h3 className="follower-count">Followers: 0</h3>
                        </div>
                        
                        <Popup trigger={
                            <a className="help">
                                <img className="help-icon" alt="Help" src={require("../img/help.png")}/>
                            </a>
                        } position="top right">
                            <HelpViewQuiz />
                        </Popup>
                    </div>

                    <div className="col-6 column2 vh-100">
                        <div className="global-quiz-title-div">
                            <h3 className="global-quiz-title">Quiz Title</h3>
                        </div>

                        <div className="view-user-quizzes">
                            <table className="view-user-quizzes-table">
                                <tbody>
                                    {quizzes.map(renderQuizzes)}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-3 column3 vh-100"></div>
                </div>
            </div>
            <Header />
        </div>

    );
};

export default MyQuizzesPage;