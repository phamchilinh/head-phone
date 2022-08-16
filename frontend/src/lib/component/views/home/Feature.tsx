import icon1 from 'public/static/images/icon1.svg';
import icon2 from 'public/static/images/icon2.svg';
import icon3 from 'public/static/images/icon3.svg';
import icon4 from 'public/static/images/icon4.svg';
import React from 'react';

import Container from '../../layouts/Container';
import ContainerFluid from '../../layouts/ContainerFluid';
import { Button } from '../../ui/button/Button';
import { FeatureCard } from '../../ui/FeatureCard';

export const Feature = () => {
  return (
    <>
      <ContainerFluid>
        <div className="h-[543px]">
          <div className="mb-[54px] grid h-[108px] justify-center">
            <p className="max-w-[539px] text-center text-[36px] font-bold leading-[54px] text-[#2F281E]">
              We design tools to unveil your superpowers
            </p>
          </div>
          <Container>
            <div className="grid h-[204px] grid-cols-4">
              <FeatureCard
                iconUrl={icon1}
                title={'First click tests'}
                text={'While most people enjoy casino gambling,'}
              />
              <FeatureCard
                iconUrl={icon2}
                title={'Design surveys'}
                text={'Sports betting, lottery and bingo playing for the fun'}
              />
              <FeatureCard
                iconUrl={icon3}
                title={'Preference tests'}
                text={'The Myspace page defines the individual.'}
              />
              <FeatureCard
                iconUrl={icon4}
                title={'Five second tests'}
                text={
                  'Personal choices and the overall personality of the person.'
                }
              />
            </div>
          </Container>
          <div className="grid place-items-center pt-[34px]">
            <Button
              name={'SIGN UP NOW'}
              text={'text-white text-base font-bold leading-6'}
              bgColor={'bg-[#FF9900]'}
              w={'w-[175px]'}
              h={'h-[53px]'}
            />
          </div>
        </div>
      </ContainerFluid>
    </>
  );
};
