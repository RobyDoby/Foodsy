import Button from '../../UI/Button';
import classes from './Banner.module.css';

const Banner = () => {
    return (
		<section className={classes.banner}>
			<div className='container'>
				<div className={classes.content}>
					<div className={classes.text}>
						<p className='subheading'>Food Market</p>
						<h1 className={`${classes['banner-title']} heading`}>
							Welcome to Food Market
						</h1>
						<p className={classes.description}>
							The sky was cloudless and of a deep dark blue. The spectacle before us
							was indeed sublime.
						</p>
						<Button className='btn'>See menu</Button>
					</div>
					<div className={classes['banner-img']}>
						<div className={classes['grid-pattern']}>
							<div className={classes['first-box']}>
                                <img src="src/assets/images/girl.png" alt="" />
                            </div>
							<div className={classes['second-box']}></div>
							<div className={classes['third-box']}></div>
							<div className={classes['avatars']}>
								<div
									className={`${classes['avatar-element']} _icons-coffee`}
								></div>
								<div className={classes['avatar-element']}>
									<img src='src/assets/images/avatar-1.png' alt='' />
								</div>
								<div className={classes['avatar-element']}>
									<img src='src/assets/images/avatar-2.png' alt='' />
								</div>
								<div className={classes['avatar-element']}>
									<img src='src/assets/images/avatar-3.png' alt='' />
								</div>
							</div>
						</div>
						<Button className={`${classes['play-modal']} _icons-triangle`}></Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Banner;