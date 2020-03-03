import React from "react";

import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: "Cats",
					imageUrl:
						"https://i.pinimg.com/236x/cc/62/34/cc62349faa75173314f2ad4afade66c6.jpg",
					id: 1,
					linkUrl: "shop/hats"
				},
				{
					title: "Hamsters",
					imageUrl:
						"https://i.pinimg.com/236x/d7/71/c4/d771c4564278a111ebf1ceabdae95cfe--dwarf-hamsters-cute-hamsters.jpg",
					id: 2,
					linkUrl: "shop/jackets"
				},
				{
					title: "Teacup Pigs",
					imageUrl:
						"http://cdn.ppcorn.com/wp-content/uploads/sites/14/2015/09/Tiny-Pigs-PPcorn-760x500.jpg",
					id: 3,
					linkUrl: "shop/sneakers"
				},
				{
					title: "Rabbits",
					imageUrl:
						"https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/p843x403/69331850_107884423924873_6561942775330242560_o.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_oc=AQmNBOglsDPI73WPOXS7_o2YWni4WtYyGWDYvTrzMxQRBHCqLb3ToGIxS7GWQCizBZFRYseA21Un5UAXpqIqseNb&_nc_ht=scontent.fbbi1-1.fna&_nc_tp=6&oh=3c119643e66b77d68a50778b3dc0a1b5&oe=5E95E6B9",
					size: "large",
					id: 4,
					linkUrl: "shop/womens"
				},
				{
					title: "Dogs",
					imageUrl: "https://wallpapercave.com/wp/8mxMD9J.jpg",
					size: "large",
					id: 5,
					linkUrl: "shop/mens"
				}
			]
		};
	}

	render() {
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ id, title, imageUrl, size}) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
				))}
			</div>
		);
	}
}

export default Directory;
