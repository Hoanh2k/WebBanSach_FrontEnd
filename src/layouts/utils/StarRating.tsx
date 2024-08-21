import { Star, StarFill, StarHalf } from "react-bootstrap-icons";

export default function renderRating(diem: number) {
    const roundedDiem = Math.round(diem);

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= roundedDiem) {
            stars.push(<StarFill className="text-warning" />);
        } else if (i === roundedDiem + 1 && diem % 1 !== 0) {
            stars.push(<StarHalf className="text-warning" />);
        } else {
            stars.push(<Star className="text-secondary" />);
        }
    }
    return stars;
}
