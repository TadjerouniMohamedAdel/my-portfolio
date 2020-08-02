import React, { Component } from 'react'
import './AboutMe.css'
import InterestItem from './InterestItem/InterestItem'
import { manga, user, prof } from '../Images/Images'
export default class AboutMe extends Component {
    render() {
        return (
            <div className="about-container">
                 <div className="about-section">
                    <h3 className="about-section-title">
                        Adel Mohamed Tadjerouni
                    </h3>
                    <div className="author-section">
                        <div class="author-section-content">
                            <p>
                                Voluptate sint Lorem aliquip consequat. Sunt Lorem laboris reprehenderit sit. Irure ex laboris excepteur ut ipsum nulla amet. Amet sint ullamco sit dolor ea in do ullamco nulla enim officia. Aliquip cupidatat ex dolore tempor. Id ex aute commodo mollit.Anim ex in tempo 
                                Voluptate sint Lorem aliquip consequat. Sunt Lorem laboris reprehenderit sit. Irure ex laboris excepteur ut ipsum nulla amet. Amet sint ullamco sit dolor ea in do ullamco nulla enim officia. Aliquip cupidatat ex dolore tempor. Id ex aute commodo mollit.Anim ex in tempo 
                                
                            </p>
                        </div>
                        <div className="author-image">
                            <img src={prof} />
                        </div>
                    </div>
                    
                </div>
                <div className="about-section">
                    <h3 className="about-section-title">
                        Interest
                    </h3>
                    <div className="interest-section">
                        <InterestItem 
                            logo="https://images.unsplash.com/photo-1543092587-d8b8feaf362b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        />
                        <InterestItem 
                            logo="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                        />
                        <InterestItem
                            logo="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                        />
                        <InterestItem
                            logo="https://i.skyrock.net/5505/23285505/pics/675433143_small.jpg"
                        />
                        <InterestItem
                            logo={manga}
                        /> 
                        <InterestItem
                            logo="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                        /> 
                    </div>
                </div>
            </div>
        )
    }
}
