import classes from './Nav.module.css';

const Nav = () => {
	return (
		<>
			<div className={'container'}>
				<nav className={classes.nav}>
					<ul className={classes['nav-list']}>
						<li>
							<a className={`${classes['logo-img']} heading`} href='#'>
								Foodsy
							</a>
						</li>
						<li>
							<a href='#' className={classes['nav-list__link']}>
								About
							</a>
						</li>
						<li>
							<a href='#' className={classes['nav-list__link']}>
								Menu
							</a>
						</li>
						<li>
							<a href='#' className={classes['nav-list__link']}>
								Blog
							</a>
						</li>
						<li>
							<a href='#' className={classes['nav-list__link']}>
								Contact
							</a>
						</li>
						<li className={'heading'}>
							<a href='#' className={`${classes['nav-list__link']} btn empty`}>
								Contact us
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Nav;
