import Button from '@components/UI/Button';
import classes from './Features.module.css';

const Features = () => {
    return (
		<section>
			<div className={'container'}>
			    <div className={classes['section-header']}>
    				<p className='subheading'>Best food</p>
    				<h2 className='heading'>Features</h2>
    				<p className={classes.description}>
    					The sky was cloudless and of a deep dark blue. The spectacle before us was
    					indeed sublime.
    				</p>
    			</div>
    			<div className={classes.content}>
    				<ul className={classes.cards}>
    					<li className={classes.card}>
    						<div className={`${classes['card-icon']} _icons-apple`}></div>
    						<h3 className={classes['card-title']}>Fresh Food</h3>
    						<p className={classes['card-description']}>
    							As I went on, still gaining velocity, the palpitation of night and day
    							merged.
    						</p>
    						<Button className={classes.cta}>Explore</Button>
    					</li>
    					<li className={classes.card}>
    						<div className={`${classes['card-icon']} _icons-motorcycle`}></div>
    						<h3 className={classes['card-title']}>Delivery</h3>
    						<p className={classes['card-description']}>
    							Went on, still gaining velocity, the palpitation of night and day
    							merged.
    						</p>
    						<Button className={classes.cta}>Download</Button>
    					</li>
    					<li className={classes.card}>
    						<div className={`${classes['card-icon']} _icons-chef-hat`}></div>
    						<h3 className={classes['card-title']}>Restaurant</h3>
    						<p className={classes['card-description']}>
    							Still gaining velocity, the went palpitation of night and day merged.
    						</p>
    						<Button className={classes.cta}>Read More</Button>
    					</li>
    				</ul>
    			</div>
			</div>
		</section>
	);
}

export default Features;