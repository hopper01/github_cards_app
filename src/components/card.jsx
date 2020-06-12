import React, { Component } from 'react';
import '../styles/card.css';



class Card extends Component{
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img className="image" src={profile.avatar_url} alt="no-img"/>
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                    <div className="location">{profile.location}</div>
                    <p className="bio"><span>Bio : </span>{profile.bio}</p>
                    <div className="link">Open Repos : <a href={profile.html_url} target="_blank" rel="noopener noreferrer"><i className="fas fa-code-branch"></i></a></div>
                    <div className="num-info">
                        <span className="num">Repos: <span id="n">{profile.public_repos}</span></span>
                        <span className="num">Followers: <span id="n">{profile.followers}</span></span>
                        <span className="num">Following: <span id="n">{profile.following}</span></span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;