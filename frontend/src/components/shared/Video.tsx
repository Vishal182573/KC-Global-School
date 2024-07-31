"use client"
import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const VideoPreview: React.FC = () => {
  return (
    <Card >
      <div className="relative">
        <video controls className="w-full h-96 rounded-lg">
          <source src="/path/to/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Card>
  );
};

export default VideoPreview;
