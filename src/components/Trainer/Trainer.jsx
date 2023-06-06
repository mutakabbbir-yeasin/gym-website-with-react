/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */

import Card from "../Card/Card";

const Trainer = ({ image, name, job, socials }) => {
  return (
    <Card className="trainer">
      <div className="trainer_img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainer_socials">
        {socials?.map(({ icon, link }, index) => {
          return (
            <a key={index} href={link} target="_blank" rel="noreffer">
              {icon}
            </a>
          );
        })}
      </div>
    </Card>
  );
};

export default Trainer;
