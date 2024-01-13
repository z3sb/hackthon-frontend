import Card from '@/components/Home/main/Card';
import React from 'react'

type Props = {}

function index({}: Props) {
  return (
    <div className="p-4 md:p-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
        <Card
          heading="Plan"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        <Card
          heading="Play"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        <Card
          heading="Connect"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        />
        <Card
          heading="Support"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
        />
          <Card
          heading="Support"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
        />
        <Card
          heading="Plan"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        <Card
          heading="Play"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        <Card
          heading="Connect"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        />
        <Card
          heading="Support"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
        />
          <Card
          heading="Support"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
        />
      </div>
    </div>
  );
}

export default index