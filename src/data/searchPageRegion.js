import mountain1 from "../assets/img/search/mountain1.jpg"
import mountain2 from "../assets/img/search/mountain2.jpg"
import mountain3 from "../assets/img/search/mountain3.jpg"
import mountain4 from "../assets/img/search/mountain4.jpg"
import mountain5 from "../assets/img/search/mountain5.jpg"
import mountain6 from "../assets/img/search/mountain6.jpg"
import mountain7 from "../assets/img/search/mountain7.jpg"
import mountain8 from "../assets/img/search/mountain8.jpg"
import mountain9 from "../assets/img/search/mountain9.jpg"
import mountain10 from "../assets/img/search/mountain10.jpg"
import mountain11 from "../assets/img/search/mountain11.jpg"
import mountain12 from "../assets/img/search/mountain12.jpg"


const regionData = {
  경기도: [
    {
      id: 1,
      name: "북한산",
      height: "836m",
      desc: "서울과 경기도에 걸쳐 있는 대표 명산",
      img: mountain1,
      courses: [
        { name: "백운대 코스", desc: "우이동 → 백운대",distance: "5.2km", time: "3시간 30분", level: "어려움" },
        { name: "둘레길 코스", desc: "정릉 → 북한산 둘레길",distance: "3.1km", time: "1시간 40분", level: "쉬움" },
        { name: "우이동 코스", desc: "우이동 → 인수봉", distance: "4.0km", time: "2시간 30분", level: "보통" }
      ]
    },
    {
      id: 2,
      name: "관악산",
      height: "632m",
      desc: "바위 능선과 야경이 유명한 산",
      img: mountain2,
      courses: [
        { name: "연주대 코스", desc: "서울대 → 연주대", distance: "4.5km", time: "2시간 30분", level: "보통" },
        { name: "사당 코스", desc: "사당역 → 연주대", distance: "3.8km", time: "2시간", level: "보통" },
        { name: "서울대 코스", desc: "서울대 → 관악산 정상", distance: "4.2km", time: "2시간 20분", level: "보통" }
      ]
    }
  ],

  강원도: [
    {
      id: 3,
      name: "설악산",
      height: "1708m",
      desc: "사계절 절경을 자랑하는 대한민국 대표 산",
      img: mountain3,
      courses: [
        { name: "대청봉 코스", desc: "오색 → 대청봉", distance: "16.3km", time: "12시간", level: "어려움" },
        { name: "울산바위 코스", desc: "설악동 → 울산바위", distance: "3.8km", time: "2시간 30분", level: "보통" },
        { name: "비선대 코스", desc: "설악동 → 비선대", distance: "6.0km", time: "3시간", level: "보통" }
      ]
    },
    {
      id: 4,
      name: "오대산",
      height: "1563m",
      desc: "완만한 능선과 숲길이 매력적인 힐링 산",
      img: mountain4,
      courses: [
        { name: "비로봉 코스", desc: "상원사 → 비로봉", distance: "7.0km", time: "3시간 30분", level: "보통" },
        { name: "선재길 코스", desc: "월정사 → 상원사", distance: "9.0km", time: "4시간", level: "쉬움" },
        { name: "월정사 코스", desc: "입구 → 월정사", distance: "5.5km", time: "2시간 30분", level: "쉬움" }
      ]
    }
  ],

  충청도: [
    {
      id: 5,
      name: "속리산",
      height: "1058m",
      desc: "법주사와 함께하는 자연·문화 명산",
      img: mountain5,
      courses: [
        { name: "천왕봉 코스", desc: "법주사 → 천왕봉", distance: "8.4km", time: "5시간", level: "보통" },
        { name: "법주사 코스", desc: "주차장 → 법주사", distance: "3.5km", time: "2시간", level: "쉬움" },
        { name: "문장대 코스", desc: "법주사 → 문장대", distance: "6.2km", time: "3시간 30분", level: "보통" }
      ]
    },
    {
      id: 6,
      name: "계룡산",
      height: "845m",
      desc: "기암괴석과 계곡이 아름다운 산",
      img: mountain6,
      courses: [
        { name: "동학사 코스", desc: "동학사 → 관음봉", distance: "6.2km", time: "3시간", level: "보통" },
        { name: "갑사 코스", desc: "갑사 → 연천봉", distance: "5.0km", time: "2시간 30분", level: "보통" },
        { name: "관음봉 코스", desc: "동학사 → 관음봉", distance: "7.0km", time: "3시간 30분", level: "어려움" }
      ]
    }
  ],

  전라도: [
    {
      id: 7,
      name: "내장산",
      height: "763m",
      desc: "단풍 명소로 유명한 산",
      img: mountain7,
      courses: [
         { name: "신선봉 코스", desc: "내장사 → 신선봉", distance: "5.0km", time: "2시간 30분", level: "보통" },
        { name: "백양사 코스", desc: "백양사 → 내장산 정상", distance: "6.0km", time: "3시간", level: "보통" },
        { name: "서래봉 코스", desc: "주차장 → 서래봉", distance: "4.8km", time: "2시간 30분", level: "보통" }
      ]
    },
    {
      id: 8,
      name: "무등산",
      height: "1187m",
      desc: "주상절리로 유명한 광주의 명산",
      img: mountain8,
      courses: [
        { name: "중봉 코스", desc: "증심사 → 중봉", distance: "5.5km", time: "3시간", level: "보통" },
        { name: "서석대 코스", desc: "증심사 → 서석대", distance: "7.5km", time: "4시간", level: "어려움" },
        { name: "원효사 코스", desc: "원효사 → 규봉암", distance: "6.0km", time: "3시간", level: "보통" }
      ]
    }
  ],

  경상도: [
    {
      id: 9,
      name: "지리산",
      height: "1915m",
      desc: "우리나라 최초의 국립공원으로 지정된 명산",
      img: mountain9,
      courses: [
        { name: "장터목 코스", desc: "중산리탐방안내소(순환)", distance: "11.0km", time: "7시간 18분", level: "어려움" },
        { name: "칼바위 코스", desc: "중산리탐방안내소 → 천왕봉", distance: "4.7km", time: "3시간 32분", level: "어려움" },
        { name: "반야봉 코스", desc: "노고단고개 → 반야봉", distance: "5.4km", time: "2시간 27분", level: "보통" }
      ]
    },
    {
      id: 10,
      name: "팔공산",
      height: "1192m",
      desc: "비로봉을 중심으로 다양한 능선을 가진 자연경관의 산",
      img: mountain10,
      courses: [
        { name: "갓바위 코스", desc: "갓바위 주차장 → 갓바위", distance: "3.0km", time: "1시간 30분", level: "쉬움" },
        { name: "비로봉 코스", desc: "동화사 → 비로봉", distance: "6.5km", time: "3시간 30분", level: "보통" },
        { name: "동화사 코스", desc: "동화사 → 염불암", distance: "5.2km", time: "2시간 40분", level: "보통" }
      ]
    }
  ],

  제주도: [
    {
      id: 11,
      name: "한라산",
      height: "1947m",
      desc: "대한민국 최고봉",
      img: mountain11,
      courses: [
        { name: "성판악 코스", desc: "성판악 → 백록담", distance: "9.6km", time: "7시간", level: "어려움" },
        { name: "관음사 코스", desc: "관음사 → 백록담", distance: "8.7km", time: "6시간", level: "어려움" },
        { name: "어리목 코스", desc: "어리목 → 윗세오름", distance: "6.8km", time: "3시간 30분", level: "보통" }
      ]
    },
    {
      id: 12,
      name: "새별오름",
      height: "519m",
      desc: "완만한 경사와 아름다운 풍경의 오름",
      img: mountain12,
      courses: [
        { name: "정상 코스", desc: "입구 → 정상", distance: "1.5km", time: "40분", level: "쉬움" },
        { name: "순환 코스", desc: "입구 → 둘레길", distance: "2.8km", time: "1시간 20분", level: "쉬움" },
        { name: "일출 코스", desc: "입구 → 정상(일출)", distance: "2.0km", time: "1시간", level: "쉬움" }
      ]
    }
  ]
}

export default regionData