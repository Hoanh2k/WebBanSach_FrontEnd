
export default function dinhDangSo(x: number | undefined) {

    if (x === undefined) {
        return 0;
    }

    if (isNaN(x)) {
        return 0;
    }

    // Su dung toLocalString de dinh dang so
    return x.toLocaleString("vi-VN")

}