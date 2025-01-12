import "./DarkNav.css";
import logo from "../../assets/spiraleE5.png";
function DarkNav() {
	const navigation = [
	  { name: "Overview", href: "/dashboard" , status : "nav_elem active"},
	  { name: "Invoice", href: "/Invoice" , status : "nav_elem"},
	  { name: "Estimates", href: "/Estimates" , status : "nav_elem"},
	  { name: "Expanses", href: "/Expanses" , status : "nav_elem"},
	  { name: "Customers", href: "/Customers" , status : "nav_elem"},
	  { name: "Business", href: "/Business" , status : "nav_elem"},
	  { name: "Account", href: "/Account" , status : "nav_elem"},
	];
	const starVal1 = [
		{star_id : "1",star_num: "1"},
		{star_id : "2",star_num: "1"},
		{star_id : "3",star_num: "1"},
		{star_id : "4",star_num: "1"},
		{star_id : "5",star_num: "0"}
	]
	const starVal2 = [
		{star_id : "1",star_num: "1"},
		{star_id : "2",star_num: "1"},
		{star_id : "3",star_num: "1"},
		{star_id : "4",star_num: "0"},
		{star_id : "5",star_num: "0"}
	]
	const starVal3 = [
		{star_id : "1",star_num: "1"},
		{star_id : "2",star_num: "1"},
		{star_id : "3",star_num: "1"},
		{star_id : "4",star_num: "1"},
		{star_id : "5",star_num: "0.5"}
	]
	return(
		<div className = "dash_content">
			<div className = "dash_nav">
				<img className="App-logo h-8 w-auto" src={logo} alt="Logo" />
				<div className = "nav_elem_cont">
					{navigation.map((item) => (
						<a key = {item.name}  href = {item.href} className = {item.status}>
							<p>{item.name}</p>
							<span></span>
						</a>
					))}

				</div>
				<div className = "user_display_cont">
					<span className = "user_img_icon">
						<p>nz</p>
					</span>
					<p className = "userName">Naeem Zubayr</p>
				</div>
			</div>
			<div className = "dash_stats_cont">
				<div className = "dash_title">
					<p>Top Trending Event</p>
				</div>
				<div className = "dash_cards">
					<div className = "dash_stats">
						<div className = "stats_top">
							<p>Coachella</p>
							<i className = "fas fa-regular fa-balloons"></i>
						</div>
						<div className = "stats_middle">
							<p>
								Annual music festival in Indio, California, featuring iconic artists performances.
							</p>
						</div>
						<div className = "stats_bottom">
							{starVal1.map((star_val) => (
								<i key = {star_val.star_id} className = {star_val.star_num > 0 && star_val.star_num < 1 ? "fas fa-star-half-stroke" 
																		: star_val.star_num >= 1 ? "fas fa-star"
																		: star_val.star_num <= 1 ? "far fa-star"
																		: "far fa-star"}></i>
							))}
							<p>4.0</p>
						</div>
					</div>
					<div className = "dash_stats">
						<div className = "stats_top">
							<p>disney world</p>
							<i className = "fas fa-regular fa-balloons"></i>
						</div>
						<div className = "stats_middle">
							<p>
								Magical theme park resort in Florida with iconic Disney experiences.
							</p>
						</div>
						<div className = "stats_bottom">
							{starVal2.map((star_val) => (
								<i key = {star_val.star_id} className = {star_val.star_num > 0 && star_val.star_num < 1 ? "fas fa-star-half-stroke" 
																		: star_val.star_num >= 1 ? "fas fa-star"
																		: star_val.star_num <= 1 ? "far fa-star"
																		: "far fa-star"}></i>
							))}
							<p>3.0</p>
						</div>
					</div>
					<div className = "dash_stats">
						<div className = "stats_top">
							<p>Coachella</p>
							<i className = "fas fa-regular fa-balloons"></i>
						</div>
						<div className = "stats_middle">
							<p>
								Annual music festival in Indio, California, featuring iconic artists performances.
							</p>
						</div>
						<div className = "stats_bottom">
							{starVal3.map((star_val) => (
								<i key = {star_val.star_id} className = {star_val.star_num > 0 && star_val.star_num < 1 ? "fas fa-star-half-stroke" 
																		: star_val.star_num >= 1 ? "fas fa-star"
																		: star_val.star_num <= 1 ? "far fa-star"
																		: "far fa-star"}></i>
							))}
							<p>4.5</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default DarkNav