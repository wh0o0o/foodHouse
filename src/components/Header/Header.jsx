import headerStyle from './Header.module.css'

function Header() {

    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.header__menu}>
                <svg width="251" height="51" viewBox="0 0 251 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.556 17.9C15.428 17.9 13.804 18.362 12.684 19.286C11.564 20.21 11.004 21.61 11.004 23.486V24.494H22.302V30.92H11.004V41H2.688V23.612C2.688 19.608 3.934 16.514 6.426 14.33C8.918 12.118 12.418 11.012 16.926 11.012C18.634 11.012 20.23 11.18 21.714 11.516C23.226 11.852 24.514 12.328 25.578 12.944L23.142 19.328C21.518 18.376 19.656 17.9 17.556 17.9ZM38.7594 41.378C36.3234 41.378 34.1254 40.874 32.1654 39.866C30.2054 38.858 28.6654 37.458 27.5454 35.666C26.4534 33.874 25.9074 31.844 25.9074 29.576C25.9074 27.336 26.4534 25.32 27.5454 23.528C28.6654 21.736 30.1914 20.35 32.1234 19.37C34.0834 18.362 36.2954 17.858 38.7594 17.858C41.2234 17.858 43.4354 18.362 45.3954 19.37C47.3554 20.35 48.8814 21.736 49.9734 23.528C51.0654 25.292 51.6114 27.308 51.6114 29.576C51.6114 31.844 51.0654 33.874 49.9734 35.666C48.8814 37.458 47.3554 38.858 45.3954 39.866C43.4354 40.874 41.2234 41.378 38.7594 41.378ZM38.7594 35.036C40.1594 35.036 41.3074 34.56 42.2034 33.608C43.0994 32.628 43.5474 31.284 43.5474 29.576C43.5474 27.896 43.0994 26.58 42.2034 25.628C41.3074 24.676 40.1594 24.2 38.7594 24.2C37.3594 24.2 36.2114 24.676 35.3154 25.628C34.4194 26.58 33.9714 27.896 33.9714 29.576C33.9714 31.284 34.4194 32.628 35.3154 33.608C36.2114 34.56 37.3594 35.036 38.7594 35.036ZM66.7321 41.378C64.2961 41.378 62.0981 40.874 60.1381 39.866C58.1781 38.858 56.6381 37.458 55.5181 35.666C54.4261 33.874 53.8801 31.844 53.8801 29.576C53.8801 27.336 54.4261 25.32 55.5181 23.528C56.6381 21.736 58.1641 20.35 60.0961 19.37C62.0561 18.362 64.2681 17.858 66.7321 17.858C69.1961 17.858 71.4081 18.362 73.3681 19.37C75.3281 20.35 76.8541 21.736 77.9461 23.528C79.0381 25.292 79.5841 27.308 79.5841 29.576C79.5841 31.844 79.0381 33.874 77.9461 35.666C76.8541 37.458 75.3281 38.858 73.3681 39.866C71.4081 40.874 69.1961 41.378 66.7321 41.378ZM66.7321 35.036C68.1321 35.036 69.2801 34.56 70.1761 33.608C71.0721 32.628 71.5201 31.284 71.5201 29.576C71.5201 27.896 71.0721 26.58 70.1761 25.628C69.2801 24.676 68.1321 24.2 66.7321 24.2C65.3321 24.2 64.1841 24.676 63.2881 25.628C62.3921 26.58 61.9441 27.896 61.9441 29.576C61.9441 31.284 62.3921 32.628 63.2881 33.608C64.1841 34.56 65.3321 35.036 66.7321 35.036ZM107.473 9.836V41H99.8708V38.732C98.3868 40.496 96.1608 41.378 93.1928 41.378C91.1208 41.378 89.2308 40.902 87.5228 39.95C85.8148 38.97 84.4568 37.584 83.4488 35.792C82.4688 34 81.9788 31.928 81.9788 29.576C81.9788 27.224 82.4688 25.166 83.4488 23.402C84.4568 21.61 85.8148 20.238 87.5228 19.286C89.2308 18.334 91.1208 17.858 93.1928 17.858C95.9088 17.858 98.0088 18.642 99.4928 20.21V9.836H107.473ZM94.8728 35.036C96.2448 35.036 97.3788 34.56 98.2748 33.608C99.1708 32.628 99.6188 31.284 99.6188 29.576C99.6188 27.896 99.1708 26.58 98.2748 25.628C97.4068 24.676 96.2728 24.2 94.8728 24.2C93.4728 24.2 92.3248 24.676 91.4288 25.628C90.5328 26.58 90.0848 27.896 90.0848 29.576C90.0848 31.284 90.5328 32.628 91.4288 33.608C92.3248 34.56 93.4728 35.036 94.8728 35.036Z" fill="#FE8C01"/>
                    <path d="M140.957 11.6V41H132.641V29.534H121.301V41H112.985V11.6H121.301V22.646H132.641V11.6H140.957ZM157.869 41.378C155.433 41.378 153.235 40.874 151.275 39.866C149.315 38.858 147.775 37.458 146.655 35.666C145.563 33.874 145.017 31.844 145.017 29.576C145.017 27.336 145.563 25.32 146.655 23.528C147.775 21.736 149.301 20.35 151.233 19.37C153.193 18.362 155.405 17.858 157.869 17.858C160.333 17.858 162.545 18.362 164.505 19.37C166.465 20.35 167.991 21.736 169.083 23.528C170.175 25.292 170.721 27.308 170.721 29.576C170.721 31.844 170.175 33.874 169.083 35.666C167.991 37.458 166.465 38.858 164.505 39.866C162.545 40.874 160.333 41.378 157.869 41.378ZM157.869 35.036C159.269 35.036 160.417 34.56 161.313 33.608C162.209 32.628 162.657 31.284 162.657 29.576C162.657 27.896 162.209 26.58 161.313 25.628C160.417 24.676 159.269 24.2 157.869 24.2C156.469 24.2 155.321 24.676 154.425 25.628C153.529 26.58 153.081 27.896 153.081 29.576C153.081 31.284 153.529 32.628 154.425 33.608C155.321 34.56 156.469 35.036 157.869 35.036ZM198.357 18.236V41H190.755V38.564C189.915 39.488 188.907 40.188 187.731 40.664C186.555 41.14 185.309 41.378 183.993 41.378C181.053 41.378 178.701 40.51 176.937 38.774C175.201 37.038 174.333 34.434 174.333 30.962V18.236H182.313V29.66C182.313 31.368 182.635 32.614 183.279 33.398C183.923 34.182 184.861 34.574 186.093 34.574C187.353 34.574 188.375 34.14 189.159 33.272C189.971 32.376 190.377 31.018 190.377 29.198V18.236H198.357ZM211.772 41.378C209.868 41.378 207.992 41.168 206.144 40.748C204.296 40.3 202.812 39.726 201.692 39.026L204.086 33.566C205.122 34.21 206.354 34.728 207.782 35.12C209.21 35.484 210.624 35.666 212.024 35.666C213.312 35.666 214.222 35.54 214.754 35.288C215.314 35.008 215.594 34.616 215.594 34.112C215.594 33.608 215.258 33.258 214.586 33.062C213.942 32.838 212.906 32.628 211.478 32.432C209.658 32.208 208.104 31.914 206.816 31.55C205.556 31.186 204.464 30.514 203.54 29.534C202.616 28.554 202.154 27.182 202.154 25.418C202.154 23.962 202.588 22.674 203.456 21.554C204.324 20.406 205.584 19.51 207.236 18.866C208.916 18.194 210.918 17.858 213.242 17.858C214.894 17.858 216.532 18.026 218.156 18.362C219.78 18.698 221.138 19.174 222.23 19.79L219.836 25.208C217.82 24.088 215.636 23.528 213.284 23.528C212.024 23.528 211.1 23.682 210.512 23.99C209.924 24.27 209.63 24.648 209.63 25.124C209.63 25.656 209.952 26.034 210.596 26.258C211.24 26.454 212.304 26.664 213.788 26.888C215.664 27.168 217.218 27.49 218.45 27.854C219.682 28.218 220.746 28.89 221.642 29.87C222.566 30.822 223.028 32.166 223.028 33.902C223.028 35.33 222.594 36.618 221.726 37.766C220.858 38.886 219.57 39.768 217.862 40.412C216.182 41.056 214.152 41.378 211.772 41.378ZM238.646 35.288C239.738 35.288 240.676 35.134 241.46 34.826C242.272 34.518 243.084 34.014 243.896 33.314L248.054 37.682C245.898 40.146 242.678 41.378 238.394 41.378C235.734 41.378 233.396 40.874 231.38 39.866C229.364 38.858 227.796 37.458 226.676 35.666C225.584 33.874 225.038 31.844 225.038 29.576C225.038 27.336 225.584 25.334 226.676 23.57C227.768 21.778 229.266 20.378 231.17 19.37C233.102 18.362 235.258 17.858 237.638 17.858C239.85 17.858 241.866 18.32 243.686 19.244C245.534 20.14 247.004 21.47 248.096 23.234C249.188 24.97 249.734 27.042 249.734 29.45L233.48 32.558C234.348 34.378 236.07 35.288 238.646 35.288ZM237.68 23.528C236.308 23.528 235.188 23.962 234.32 24.83C233.452 25.67 232.962 26.888 232.85 28.484L242.09 26.678C241.81 25.726 241.278 24.97 240.494 24.41C239.71 23.822 238.772 23.528 237.68 23.528Z" fill="#232323"/>
                </svg>
            </div>
            <nav className={headerStyle.header__nav}>
                <ul className={headerStyle.header__menu}>
                    <li className="header__item"><a href="" className="header__link active">Главная</a></li>
                    <li className="header__item"><a href="" className="header__link">Меню</a></li>
                    <li className="header__item"><a href="" className="header__link">Сервис</a></li>
                    <li className="header__item"><a href="" className="header__link">О нас</a></li>
                </ul>
            </nav>
            <div className={headerStyle.header__control}>
                <div className={headerStyle.header__cart}>
                    <div className={headerStyle.header__cartIcon}>
                        <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38 12.1391V13.1946C38 14.0691 37.2911 14.778 36.4167 14.778H35.8889L34.1662 26.8369C33.9433 28.3969 32.6072 29.5557 31.0314 29.5557H6.96865C5.39277 29.5557 4.0567 28.3969 3.83378 26.8369L2.11111 14.778H1.58333C0.708872 14.778 0 14.0691 0 13.1946V12.1391C0 11.2646 0.708872 10.5557 1.58333 10.5557H6.02597L13.0705 0.869635C13.7563 -0.0732401 15.0765 -0.281778 16.0195 0.404003C16.9624 1.08978 17.1709 2.41009 16.4851 3.35303L11.2467 10.5557H26.7533L21.5149 3.35296C20.8291 2.41009 21.0376 1.08972 21.9806 0.403937C22.9234 -0.281844 24.2438 -0.073372 24.9296 0.869569L31.974 10.5557H36.4167C37.2911 10.5557 38 11.2646 38 12.1391ZM20.5833 23.7502V16.3613C20.5833 15.4868 19.8745 14.778 19 14.778C18.1255 14.778 17.4167 15.4868 17.4167 16.3613V23.7502C17.4167 24.6246 18.1255 25.3335 19 25.3335C19.8745 25.3335 20.5833 24.6246 20.5833 23.7502ZM27.9722 23.7502V16.3613C27.9722 15.4868 27.2634 14.778 26.3889 14.778C25.5144 14.778 24.8056 15.4868 24.8056 16.3613V23.7502C24.8056 24.6246 25.5144 25.3335 26.3889 25.3335C27.2634 25.3335 27.9722 24.6246 27.9722 23.7502ZM13.1944 23.7502V16.3613C13.1944 15.4868 12.4856 14.778 11.6111 14.778C10.7366 14.778 10.0278 15.4868 10.0278 16.3613V23.7502C10.0278 24.6246 10.7366 25.3335 11.6111 25.3335C12.4856 25.3335 13.1944 24.6246 13.1944 23.7502Z" fill="#232323"/>
                        </svg>
                    </div>
                    <div className={headerStyle.header__cartCount}>12</div>
                </div>
            </div>
        </header>
    )

}

export default Header