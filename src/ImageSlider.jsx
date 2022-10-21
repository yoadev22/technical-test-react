import styled from "@emotion/styled";
import { useState } from "react";

const IMAGE_SET = [
    {
        id: 1,
        url: "https://www.publicdomainpictures.net/pictures/30000/velka/sunset-in-harbor.jpg",
    },
    {
        id: 2,
        url: "https://www.publicdomainpictures.net/pictures/40000/velka/rural-field-1363007014cis.jpg",
    },
    {
        id: 3,
        url: "https://as2.ftcdn.net/v2/jpg/01/26/21/61/1000_F_126216157_NMcUhK1iOgw2asroRaX0686iYgjbdMNr.jpg",
    },
];

const Container = styled.div`
    position: relative;
    height: 80vh;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
`;

const Slide = styled.div`
    height: 100%;
    width: 100%;
    flex-shrink: 0;
    background-position: center;
    background-size: cover;
    transition: all 350ms ease-in-out;
`;

const ControlArea = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    align-items: center;
    padding: 0.5rem;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => (props.gap ? props.gap + "rem" : "0.7rem")};
`;

export function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function nextSlide() {
        setCurrentIndex((prev) => {
            if (prev >= IMAGE_SET.length - 1) {
                return 0;
            }
            return prev + 1;
        });
    }

    function prevSlide() {
        setCurrentIndex((prev) => {
            if (prev < 0) {
                return IMAGE_SET.length - 1;
            }
            return prev - 1;
        });
    }

    return (
        <Container>
            {IMAGE_SET.map((item, i) => {
                return (
                    <Slide
                        key={item.id}
                        style={{
                            backgroundImage: `url(${item.url})`,
                            marginLeft:
                                i === 0 ? `-${currentIndex * 100}%` : undefined,
                        }}
                    ></Slide>
                );
            })}

            <ControlArea>
                <Indicator
                    count={IMAGE_SET.length}
                    currentIndex={currentIndex}
                    onClick={setCurrentIndex}
                />
                <Flex>
                    <button onClick={() => prevSlide()}> prev </button>
                    <button onClick={() => nextSlide()}> next </button>
                </Flex>
            </ControlArea>
        </Container>
    );
}

const Dot = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    background-color: #eee;
    opacity: ${(props) => (props.isActive ? 1 : 0.5)};
    transition: all 350ms ease-in-out;
`;

function Indicator({ currentIndex, count, onClick }) {
    return (
        <Flex>
            {Array(count)
                .fill(0)
                .map((_, i) => (
                    <Dot
                        key={i}
                        isActive={currentIndex === i}
                        onClick={() => onClick(i)}
                    />
                ))}
        </Flex>
    );
}
