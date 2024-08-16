"use client"
import React from "react";
import { Card } from "../ui/card";

const VideoPreview: React.FC = () => {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <video
          controls
          className="w-full h-full rounded-lg"
          poster="/assets/images/logo.jpg"
        >
          <source src="/assets/images/kc_school.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    </Card>
  );
};

export default VideoPreview;