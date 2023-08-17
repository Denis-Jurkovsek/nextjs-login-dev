import React from 'react'
import type { Props } from 'react-apexcharts'
import Chart from 'react-apexcharts'

import { CardBalance1 } from '../home/card-balance1'
import { CardBalance2 } from '../home/card-balance2'
import { CardBalance3 } from '../home/card-balance3'
import { Box } from '../styles/box'
import { Flex } from '../styles/flex'

const state: Props['series'] = [
  {
    name: 'Doppelverwendungen',
    data: [11, 32, 45, 32, 34, 52, 41, 40, 69, 62, 91, 148],
    color: '#F5A524'
  },
  {
    name: 'Austritte',
    data: [11, 32, 45, 32, 34, 52, 41, 40, 69, 62, 91, 148],
    color: '#F31260'
  },
  {
    name: 'Eintritte',
    data: [11, 32, 45, 32, 34, 52, 41, 40, 69, 62, 91, 148],
    color: '#17C964'
  }
]

const options: Props['options'] = {
  chart: {
    type: 'area',
    animations: {
      easing: 'linear',
      speed: 300
    },
    sparkline: {
      enabled: false
    },
    brush: {
      enabled: false
    },
    id: 'basic-bar',
    fontFamily: 'Inter, sans-serif',
    foreColor: 'var(--nextui-colors-accents9)',
    stacked: true,
    toolbar: {
      show: true,
      tools: {
        selection: false,
        zoom: false,
        pan: false,
        reset: false
      }
    }
  },

  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    labels: {
      // show: false,
      style: {
        colors: 'var(--nextui-colors-accents8)',
        fontFamily: 'Inter, sans-serif'
      }
    },
    axisBorder: {
      color: 'var(--nextui-colors-border)'
    },
    axisTicks: {
      color: 'var(--nextui-colors-border)'
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: 'var(--nextui-colors-accents8)',
        fontFamily: 'Inter, sans-serif'
      }
    }
  },
  tooltip: {
    enabled: false
  },
  grid: {
    show: true,
    borderColor: 'var(--nextui-colors-border)',
    strokeDashArray: 0,
    position: 'back'
  },
  stroke: {
    curve: 'smooth',
    fill: {
      colors: ['red']
    }
  },
  // @ts-ignore
  markers: false
}

export const Steam = () => {
  return (
    <>
      <Box
        css={{
          width: '100%',
          zIndex: 5
        }}
      >
        <div id='chart'>
          <Flex
            direction={'row'}
            css={{
              '@xsMax': {
                flexDirection: 'column'
              },
              '@smMax': {
                flexDirection: 'column'
              },
              '@mdMax': {
                flexDirection: 'column'
              }
            }}
          >
            <CardBalance1 />
            <CardBalance2 />
            <CardBalance3 />
          </Flex>

          <Chart options={options} series={state} type='area' height={425} />
        </div>
      </Box>
    </>
  )
}
