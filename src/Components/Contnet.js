
import React from "react";
import img1 from "../Pics/img1.png";

const data = "Thanjavur (Tamil: [t̪aɲdʑaːʋuːɾ]), also Tanjore,[1] is a city in the Indian state of Tamil Nadu. Thanjavur is the 8th biggest city in Tamil Nadu. Thanjavur is an important center of South Indian religion, art, and architecture. Most of the Great Living Chola Temples, which are UNESCO World Heritage Monuments, are located in and around Thanjavur. The foremost among these, the Brihadeeswara Temple, built by the Chola emperor Rajaraja I, is located in the centre of the city. Thanjavur is also home to Tanjore painting, a painting style unique to the region. Thanjavur is the headquarters of the Thanjavur District. The city is an important agricultural centre located in the Kaveri Delta and is known as the Rice bowl of Tamil Nadu. Thanjavur is administered by a municipal corporation covering an area of 128.02 km2 (49.43 sq mi) and had a population of 290,720 in 2011. Roadways are the major means of transportation, while the city also has rail connectivity. The nearest airport is Tiruchirapalli International Airport, located 59.6 km (37.0 mi) away from the city. The nearest seaport is Karaikal, which is 94 km (58 mi) away from Thanjavur. The city first rose to prominence during the reign of the Cholas when it served as the capital of the empire. After the fall of the Cholas, the city was ruled by various dynasties such as the Mutharaiyar dynasty, the Pandyas, the Vijayanagar Empire, the Madurai Nayaks, the Thanjavur Nayaks, the Thanjavur Marathas and the British Empire. It has been a part of independent India since 1947."

const Content = () => {
    return(
        <div className="w-full bg-black w-screen">
            <div className="mx-auto rounded-3xl lg:mx-[100px]  p-10 bg-white flex justify-center space-x-7 grid-cols-2">
                <img src={img1} className="rounded-[30px] w-[150px] lg:w-[500px] md:w-[300px] "></img>
           
            <h1 className="text-black w-auto p-10 text-justify ">{data} </h1>
            
            </div>

        </div>
    );
}


export default Content;
