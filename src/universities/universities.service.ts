import { Injectable } from '@nestjs/common';
import { findAllByAltText } from '@testing-library/react';
import { University } from './interfaces/university.interface';

@Injectable()
export class UniversitiesService {
  private readonly universities: University[] = [
    {
      id: '1',
      name: 'Alabama A & M University',
      City: {
        id: '1',
        name: 'Huntsville',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '2',
      name: 'University of Alabama at Birmingham',
      City: {
        id: '2',
        name: 'Birmingham',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '3',
      name: 'Amridge University',
      City: {
        id: '3',
        name: 'Montgomery',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '4',
      name: 'University of Alabama in Huntsville',
      City: {
        id: '1',
        name: 'Huntsville',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '5',
      name: 'Alabama State University',
      City: {
        id: '1',
        name: 'Huntsville',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '6',
      name: 'University of Alabama System Office',
      City: {
        id: '1',
        name: 'Huntsville',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '7',
      name: 'The University of Alabama',
      City: {
        id: '1',
        name: 'Huntsville',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '8',
      name: 'Central Alabama Community College',
      City: {
        id: '8',
        name: 'Alexander City',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '9',
      name: 'Athens State University',
      City: {
        id: '9',
        name: 'Athens',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '10',
      name: 'Auburn University at Montgomery',
      City: {
        id: '10',
        name: 'Auburn',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '11',
      name: 'Auburn University',
      City: {
        id: '10',
        name: 'Auburn',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '12',
      name: 'Birmingham Southern College',
      City: {
        id: '2',
        name: 'Birmingham',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '13',
      name: 'Chattahoochee Valley Community College',
      City: {
        id: '13',
        name: 'Phenix City',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '14',
      name: 'Concordia College Alabama',
      City: {
        id: '14',
        name: 'Selma',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '15',
      name: 'South University-Montgomery',
      City: {
        id: '15',
        name: 'Montgomery',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '16',
      name: 'Enterprise State Community College',
      City: {
        id: '16',
        name: 'Enterprise',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '17',
      name: 'Coastal Alabama Community College',
      City: {
        id: '17',
        name: 'Bay Minette',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '18',
      name: 'Faulkner University',
      City: {
        id: '18',
        name: 'Montgomery',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '19',
      name: 'Gadsden State Community College',
      City: {
        id: '19',
        name: 'Gadsden',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
    {
      id: '20',
      name: 'New Beginning College of Cosmetology',
      City: {
        id: '20',
        name: 'Albertville',
        State: {
          id: '1',
          name: 'Alabama',
        },
      },
    },
  ];

  findAlluniversities(): University[] {
    return this.universities;
  }

  findUniversity(id: string): University {
    return this.universities.find((university) => university.id === id);
  }
}