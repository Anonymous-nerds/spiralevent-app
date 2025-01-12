import "./dashboard_content.css"
function Dash_Cont () {
	const eventDets = [
		{ index : "1", month : "Jan", date : "13", time : "14:00 - 17 : 00", location : "Shoprite", event_title : "Anime Con", event_desc : "random information about the event that would capture the user"},
		{ index : "2", month : "may", date : "08", time : "19:00 - 22 : 00", location : "Farm center", event_title : "Face Paint Event", event_desc : "random information about the event that would capture the user"},
		{ index : "3", month : "dec", date : "21", time : "11:00 - 14 : 00", location : "BUK", event_title : "Google Meet", event_desc : "random information about the event that would capture the user"},
		{ index : "4", month : "Apr", date : "11", time : "09:00 - 12 : 00", location : "Skyline University", event_title : "CyberSecurity Lecture", event_desc : "random information about the event that would capture the user"},
		{ index : "5", month : "feb", date : "18", time : "15:00 - 18 : 00", location : "random Event center", event_title : "kano tech brainstorm", event_desc : "random information about the event that would capture the user"}

	]
	return (
		<div className = "dashboard">
			<div className = "events_container">
				<span className = "events_container_title">
					<p>Interesting Events</p>
					<p>Check Out Some of our event to make your day more fun with ease</p>
				</span>
				<span className = "events_slides">
					{eventDets.map((detail) => (
						<span key  = {detail.index} className = "event_slide">
							<span className = "date_cont">
								<p>{detail.date}</p>
								<p>{detail.month}</p>
							</span>
							<span className = "slide-bar"></span>
							<span className = "time_loc_cont">
								<span className = "dets_cont">
									<i className = "fas fa-clock"></i>
									<p>{detail.time}</p>
								</span>
								<span className = "dets_cont">
									<i className = "fad fa-map-pin"></i>
									<p>{detail.location}</p>
								</span>
							</span>
							<span className = "event_desc_cont">
								<p>{detail.event_title}</p>
								<p>{detail.event_desc}</p>
							</span>
							<span className = "event_action_cont">
								<button>
									<p>Join Event</p>
									<i className = "fas fa-plus"></i>
								</button>
							</span>
						</span>
					))}
				</span>
			</div>
			<div className = "create_event">
				<div className = "create_title">
					<p>Wish To Create Your Event</p>
					<i className = "fas fa-people-roof"></i>
				</div>
				<div className = "create_img">
					{/*<img src = "#">*/}
				</div>
				<div className = "create_writeup">
					
				</div>
				<div className = "create_btn">
					
				</div>
			</div>
		</div>
	);
}
export default Dash_Cont