let shareList = [
    'حول استنكار  النشوة وتمجيد الألم',
    'ฯ໐น kຖ໐ຟ thē ງrค๓๓ฯŞ คrē ค ว໐kē ຟhēຖ fนtนrē ໓໐ēŞຖ\'t ຟiຖ ๖ēŞt ēงērฯthiຖງ',
    '布尔代数上何时存在正测度的问题'
]

export default function getShareDescription() {
    return shareList[Math.floor(Math.random() * shareList.length)];
}