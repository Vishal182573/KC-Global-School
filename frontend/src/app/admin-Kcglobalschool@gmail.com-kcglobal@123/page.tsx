"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from 'next/image';
import { BACKEND_URL } from '@/lib/constant';

// Define types based on your Mongoose models
type Notification = {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
};

type GalleryItem = {
  _id: string;
  title: string;
  images: string[];
};

type CarouselItem = {
  _id:string,
  image: string;
};

type Enquiry = {
  _id: string;
  Name: string;
  phoneNumber: string;
  createdAt: string;
};

const AdminPanel: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [galleries, setGalleries] = useState<GalleryItem[]>([]);
  const [carousel, setCarousel] = useState<CarouselItem[]>([]);

  const [newNotification, setNewNotification] = useState({ title: '', description: '' });
  const [newGallery, setNewGallery] = useState({title:"", images:[""]});
  const [newCarouselImage, setNewCarouselImage] = useState<File | null>(null);
  const [newGalleryImage, setNewGalleryImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    fetchNotifications();
    fetchGalleries();
    fetchCarousel();
    fetchEnquiries();
  }, []);
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const fetchEnquiries = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/form/getEnquiries`);
        if (response.status === 200) {
          setEnquiries(response.data);
        }
      } catch (error) {
        console.error('Error fetching enquiries:', error);
      }
    };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/notifications`);
      if(response.status==200){
        setNotifications(response.data);
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const addNotification = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/notifications/push`, newNotification);
      fetchNotifications();
      setNewNotification({ title: '', description: '' });
    } catch (error) {
      console.error('Error adding notification:', error);
    }
  };

  const deleteNotification = async (id: string) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/notifications/${id}`);
      fetchNotifications();
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  const fetchGalleries = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/galleries`);
      setGalleries(response.data);
    } catch (error) {
      console.error('Error fetching galleries:', error);
    }
  };

  const addGallery = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/galleries/add`, newGallery);
      fetchGalleries();
      alert("Gallery added successfully");
      setNewGallery({ title: '', images: [] });
    } catch (error) {
      console.error('Error adding gallery:', error);
    }
  };

  const deleteGallery = async (_id: string) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/galleries/${_id}`);
      fetchGalleries();
    } catch (error) {
      console.error('Error deleting gallery:', error);
    }
  };

  const handleGalleryImageUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      const response = await axios.post(
        `${BACKEND_URL}/api/image/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if(response.status === 201){
        alert("Image added successfully");
        newGallery.images.push(response.data.imageUrl);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const uploadCarouselImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      const response = await axios.post(
        `${BACKEND_URL}/api/image/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if(response.status === 201) return response.data.imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return "";
    }
  };

  const fetchCarousel = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/coursorels`);
      console.log(response.data)
      setCarousel(response.data);
    } catch (error) {
      console.error('Error fetching carousel:', error);
    }
  };

  const addCarouselImage = async () => {
    if (!newCarouselImage) return;
    try {
      const imageUrl = await uploadCarouselImage(newCarouselImage);
      await axios.post(`${BACKEND_URL}/api/coursorels/add`, { image: imageUrl });
      alert("Image added");
      fetchCarousel();
      setNewCarouselImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error('Error adding carousel image:', error);
    }
  };

  const deleteCarouselImage = async (id:string) => {
    try {
      console.log(id);
      await axios.delete(`${BACKEND_URL}/api/coursorels/${id}`);
      fetchCarousel();
    } catch (error) {
      console.error('Error deleting carousel image:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, setImage: React.Dispatch<React.SetStateAction<File | null>>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* Notifications Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col mb-4">
            <Input
              placeholder="Title"
              value={newNotification.title}
              onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
              className="mb-2"
            />
            <Input
              placeholder="Description"
              value={newNotification.description}
              onChange={(e) => setNewNotification({ ...newNotification, description: e.target.value })}
              className="mb-2"
            />
            <Button onClick={addNotification}>Add Notification</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications.map((notification) => (
                <TableRow key={notification._id}>
                  <TableCell>{notification.title}</TableCell>
                  <TableCell>{notification.description}</TableCell>
                  <TableCell>
                    <Button onClick={() => deleteNotification(notification._id)} variant="destructive">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Gallery Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Gallery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col mb-4">
            <Input
              placeholder="Title"
              value={newGallery.title}
              onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
              className="mb-2"
            />
            <Input
              type="file"
              onChange={(e) => handleImageChange(e, setNewGalleryImage)}
              className="mb-2"
            />
            {newGalleryImage && (
              <Button onClick={() => handleGalleryImageUpload(newGalleryImage)} className="mb-2">
                Upload Image
              </Button>
            )}
            {newGallery.images.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {newGallery.images.map((img, index) => (
                  <Image key={index} src={img} alt={`Gallery image ${index}`} width={100} height={100} />
                ))}
              </div>
            )}
            <Button onClick={addGallery}>Add Gallery</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Images</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {galleries.map((gallery) => (
                <TableRow key={gallery._id}>
                  <TableCell>{gallery.title}</TableCell>
                  <TableCell>
                    {gallery.images.map((image, index) => (
                      <Image key={index} src={image} alt={`Gallery image ${index}`} width={50} height={50} />
                    ))}
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => deleteGallery(gallery._id)} variant="destructive">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Carousel Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Carousel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col mb-4">
            <Input
              type="file"
              onChange={(e) => handleImageChange(e, setNewCarouselImage)}
              className="mb-2"
            />
            {newCarouselImage && imagePreview && (
              <div className="mb-2">
                <Image src={imagePreview} alt="Carousel preview" width={100} height={100} />
              </div>
            )}
            <Button onClick={addCarouselImage}>Add Carousel Image</Button>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {carousel.map((item, index) => (
              <div key={index} className="relative flex justify-between items-center">
                <Image src={item.image} alt={`Carousel image ${index}`} width={100} height={100} />
                <Button onClick={() => deleteCarouselImage(item._id)} variant="destructive" className="absolute top-0 right-0">Delete</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
      <CardHeader>
        <CardTitle>Enquiries</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {enquiries.map((enquiry) => (
              <TableRow key={enquiry._id}>
                <TableCell>{enquiry.Name}</TableCell>
                <TableCell>{enquiry.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    </div>
  );
};

export default AdminPanel;
