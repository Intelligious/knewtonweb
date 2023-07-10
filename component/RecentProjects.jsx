import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const RecentProjects = () => {
  return (
    <div className="bg-color pb-5 " id="recentprojects">
      <div className="container">
        <div className="row ">
          <div className="text-center mt-5 ">
            <div className="recent-text ">Recent Projects</div>
          </div>
          <div className="col-12 col-md-4 mt-3 mb-3">
            <Card className="shadow">
              <CardMedia
                component="img"
                alt=""
                className="img_p"
                image="/images/caseIMG1 (1).png"
              />

              <CardContent className="line">
                <h2 className="simplify">Hard Asset</h2>
                <a target="_blank" href="https://hardassetsalliance.com/">
                  <button className="learn_button">Explore WebAPP</button>
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="col-12 col-md-4 mt-3 mb-1">
            <Card className="shadow">
              <CardMedia
                component="img"
                alt=""
                className="img_p"
                image="/images/caseIMG1 (2).png"
              />

              <CardContent className="line">
                <h2 className="simplify">Distro Pro</h2>
                <a target="_blank" href="https://distroproaudio.com/">
                  <button className="learn_button">Explore WebAPP</button>
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="col-12 col-md-4 mt-3 mb-1">
            <Card className="shadow">
              <CardMedia
                component="img"
                alt=""
                className="img_p"
                image="/images/caseIMG1 (3).png"
              />

              <CardContent className="line">
                <h2 className="simplify">Coachr</h2>
                <a target="_blank" href="https://www.coachr.io/">
                  <button className="learn_button">Explore WebAPP</button>
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="col-12 col-md-4 mt-3 mb-1">
            <Card className="shadow">
              <CardMedia
                component="img"
                alt=""
                className="img_p"
                image="/images/caseIMG1 (4).png"
              />

              <CardContent className="line">
                <h2 className="simplify">Wayfair</h2>
                <a target="_blank" href="https://www.wayfair.com/">
                  <button className="learn_button">Explore WebAPP</button>
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="col-12 col-md-4 mt-3 mb-1">
            <Card className="shadow">
              <CardMedia
                component="img"
                alt=""
                className="img_p"
                image="/images/caseIMG1 (5).png"
              />

              <CardContent className="line">
                <h2 className="simplify">Fiter</h2>
                <a target="_blank" href="https://get.fitr.training/">
                  <button className="learn_button">Explore WebAPP</button>
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="col-12 col-md-4 mt-3 mb-1">
            <Card className="shadow">
              <CardMedia
                component="img"
                alt=""
                className="img_p"
                image="/images/caseIMG1 (6).png"
              />

              <CardContent className="line">
                <h2 className="simplify">Circle</h2>
                <a target="_blank" href="https://circledna.com/">
                  <button className="learn_button">Explore WebAPP</button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
