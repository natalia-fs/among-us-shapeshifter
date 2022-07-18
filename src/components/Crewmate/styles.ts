import styled from 'styled-components';
interface CrewmateStylesProps{
  color: string;
}
export const Container = styled.div<CrewmateStylesProps>`
  position: relative;
  cursor: pointer;
  &:nth-child(4n-2), &:nth-child(4n-3){
    transform: rotateY(180deg);
  }
  
.crew{
  /* background-color: #840931; */
  height: 200px;
  width: 140px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border: 10px solid black;
  border-bottom: none;
  border-radius: 60px 80px 0 0;
  z-index: 1;
  transform: scale(.8);
}
.crew:after{
  content: "";
  position: absolute;
  width: 92%;
  height: 85%;
  background-color: ${(props) => props.color};
  /* background-color: #EA1616; */
  top: 2.5px;
  left: 6px;
  border-radius: 58% 70% 28% 42% / 28% 56% 88% 89%;
}
.crew-shadow{
  filter: hue-rotate(-19deg) brightness(0.75) grayscale(0.38);
  height: 200px;
  width: 140px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border: 10px solid black;
  border-bottom: none;
  border-radius: 60px 80px 0 0;
  z-index: 1;
  transform: scale(.8);
}

.legs{
  height: 50px;
  width: 60px;
  /* background-color: #840931; */
  background: ${(props) => props.color};
  filter: hue-rotate(-19deg) brightness(0.75) grayscale(0.38);
  position: absolute;
  bottom: -50px;
  left: -10px;
  border: 10px solid black;
  border-top: none;
  border-radius: 0 0 22px 22px;
  z-index: 1;
}
.legs:before{
  content: "";
  height: 45px;
  width: 60px;
  /* background-color: #840931; */
  background-color: ${(props) => props.color};
  position: absolute;
  right: -90px;
  border: 10px solid black;
  border-top: none;
  border-radius: 0 0 22px 22px;
}
.legs:after{
  content: "";
  height: 10px;
  width: 55px;
  background-color: black;
  position: absolute;
  top: -10px;
  left: 40px;
  border-radius: 0 0 10px 0;
}

.back{
  height: 120px;
  width: 35px;
  /* background-color: #EA1616; */
  background-color: ${(props) => props.color};
  border: 10px solid black;
  position: absolute;
  left: -45px;
  top: 65px;
  border-right: none;
  border-radius: 20px 0 0 20px;
}
.back:before{
  content: "";
  height: 78px;
  width: 26px;
  /* background-color: #840931; */
  background-color:${(props) => props.color};
  filter: hue-rotate(-19deg) brightness(0.75) grayscale(0.38);
  position: absolute;
  bottom: -1px;
  left: -1px;
  border-radius: 12px 0 0 8px;
}

.glass{
  height: 75px;
  width: 110px;
  background-color: #225381;
  z-index: 2;
  position: absolute;
  top: 30px;
  left: 40px;
  border: 10px solid black;
  border-radius: 25px 50px 30px 30px;
}
.glass:before{
  content: "";
  position: absolute;
  height: 65%;
  width: 85%;
  background-color: #71D4EC;
  border-radius: 0 28px 3px 30px;
  right: 0;
  top: 0;
}
.glass:after{
  content: "";
  position: absolute;
  width: 45%;
  height: 22%;
  background-color: #F7F7F7;
  left: 39px;
  top: 5px;
  border-radius: 10px;
  transform: rotate(6deg);
}

.shadow{
  height: 40px;
  width: 210px;
  background-color: rgba(153, 130, 0, .2);
  position: absolute;
  bottom: -60px;
  right: -40px;
  border-radius: 50%;
  z-index: 0;
}
`;