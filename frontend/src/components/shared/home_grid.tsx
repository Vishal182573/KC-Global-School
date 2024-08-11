import Image from 'next/image';
import React from 'react';

const SchoolFacilities = () => {
  const facilities = [
    { name: 'Computer Lab', image: "https://drive.google.com/uc?export=download&id=18X8amix_ucfx0C-8LmJMe7T-3fy3_Cen" },
    { name: 'Playground', image: 'https://drive.google.com/uc?export=download&id=18acKeS0Y8Lt7Xd6DFsFG2Y4qPRjPdjB0' },
    { name: 'Activity Room', image: 'https://drive.google.com/uc?export=download&id=18nRStxXqIpPVxjbqfeW5GCrYGPQfJArS' },
    { name: 'Yoga Class', image: 'https://drive.google.com/uc?export=download&id=18ql4Pdx90-wKsyWwAXNcaPg_WMypNKvl' },
    { name: 'Dance Class', image: 'https://drive.google.com/uc?export=download&id=18jUNkuHCowDx43N2vBr6p4qqwmUDgEv6' },
    { name: 'Morning Assembly', image: 'https://drive.google.com/uc?export=download&id=18sOmhItWrk08gN6Whpx-JJRbJC4_bJM6' },
  ];

  return (
    <div className="bg-white p-8">
      <h2 className="text-xs font-semibold text-blue-500 mb-2">DISCOVER</h2>
      <h1 className="text-4xl font-bold text-navy-900 mb-4">KC GLOBAL SCHOOL</h1>
      <p className="text-gray-700 mb-8">
        The school campus is super modern, with lots of space, safety, and nature-friendly features that make students really enjoy being there.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {facilities.map((facility, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
            <Image src={facility.image} alt={facility.name} className="w-full h-48 object-cover" width={1000} height={2000}/>
            <div className="absolute bottom-0 left-0 right-0 bg-blue-500 text-white py-2 px-4">
              <p className="text-sm font-semibold">{facility.name.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolFacilities;