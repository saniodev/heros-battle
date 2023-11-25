"use client"

import React, { useEffect } from 'react';
import fetchMetahumans from '../../api/metahumans';
import CardComponent from '@/app/components/card/CardComponent';
import { FaSuperpowers, FaSearch } from 'react-icons/fa';
import ModalComponent from '@/app/components/modal/Modal';
import InputIconComponent from '@/app/components/inputIconComponent/InputIconComponent';
import { useAppContext } from '../../contex/Contex';

interface Metahuman {
  id: string;
  name: string;
  images?: {
    md?: string;
  };
  powerstats: {
    [key: string]: number;
  };
}

const HomePage: React.FC = () => {
  const {
    metahumans,
    setMetahumans,
    selectedMetahumans,
    setSelectedMetahumans,
    isModalOpen,
    setIsModalOpen,
    filter,
    setFilter,
  } = useAppContext();

  useEffect(() => {
    const getMetahumans = async () => {
      try {
        const data = await fetchMetahumans();
        setMetahumans(data);
      } catch (error) {
        console.error(error);
      }
    };

    getMetahumans();
  }, [setMetahumans]);

  const handleSelectMetahuman = (selectedMetahuman: Metahuman) => {
    setSelectedMetahumans((prevSelected: Metahuman[]) => {
      let updatedSelected = [...prevSelected, selectedMetahuman];

      if (updatedSelected.length === 1) {
        setIsModalOpen(true);
      }

      return updatedSelected;
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMetahumans([]);
  };

  const filteredMetahumans = metahumans.filter((metahuman: { name: string; }) =>
    metahuman.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className='flex justify-end mr-7 mt-7'>
        <InputIconComponent
          type='text'
          placeholder='Digite o nome do heroi'
          icon={<FaSearch />}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div>
        <div className='flex flex-row flex-wrap'>
          {filteredMetahumans.map((metahuman: { id: React.Key | null | undefined; images: { md: any; }; name: any; powerstats: { power: any; }; }) => (
            <CardComponent
              key={metahuman.id}
              metahuman={metahuman}
              imageProps={{ src: metahuman.images?.md, alt: metahuman.name }}
              textProps={{ text: metahuman.name }}
              iconProps={{ icon: FaSuperpowers }}
              powerProps={{ value: metahuman.powerstats?.power }}
              onSelect={handleSelectMetahuman}
              isSelected={selectedMetahumans.includes(metahuman)}
            />
          ))}
        </div>
      </div>
      {selectedMetahumans.length === 2 && (
        <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} metahumans={selectedMetahumans} />
      )}
    </div>
  );
};

export default HomePage;
