import React from 'react'
import twitter from '../../assets/twitter2.png';
import github from '../../assets/github.png';
import telegram from '../../assets/telegram.png';
import discord from '../../assets/discord.png';

const SocialIcons = () => {
    return (
        <div>
            <section class="trial-block shadow3 absolute top-[21%] -right-[20%] animate-pulse" id="ContactUs">
                <div class="social-overlap process-scetion">
                    <div class="row justify-content-center !bg-transparent">
                        <div class="social-bar !bg-transparent">
                            <div class="social-icons  w-[5rem] !bg-transparent mb-3 flex flex-col justify-center iconpad text-center">
                                <a class="slider-nav-item"><img src={twitter} alt="" /></a>
                                <a class="slider-nav-item"><img src={telegram} alt="" /></a>
                                <a href="" target="_blank" class="slider-nav-item"><img src={github} alt="" /></a>
                                <a href="" target="_blank" class="slider-nav-item"><img src={discord} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default SocialIcons
