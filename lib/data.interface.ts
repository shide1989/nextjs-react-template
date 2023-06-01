export interface RecordDTO {
  datasetid: string; // 'lieux-de-tournage-a-paris';
  recordid: string; // '135814e84555cd60c7a37c965990279fac017eae';
  fields: {
    coord_y: number; // 48.84950862;
    date_fin: string; // '2019-05-24';
    id_lieu: string; // '2019-537';
    adresse_lieu: string; // '103 boulevard suchet, 75016 paris';
    geo_point_2d: [number, number]; // [48.84950861991641, 2.2598883809377233];
    nom_producteur: string; // 'atlantique productions';
    geo_shape: {
      // looks like MongoDB GeoPoints.
      coordinates: [number, number]; // [2.2598883809377233, 48.84950861991641];
      type: 'Point'; // 'Point';
    };
    nom_realisateur: string; // 'Damien Chazelle';
    ardt_lieu: string; // '75016';
    type_tournage: string; // 'S\u00e9rie TV';
    annee_tournage: string; // '2019';
    nom_tournage: string; // 'The Eddy';
    date_debut: string; // '2019-05-24';
    coord_x: number; // 2.25988838;
  };
  geometry: {
    type: 'Point'; // 'Point';
    coordinates: [number, number]; // [2.2598883809377233, 48.84950861991641];
  };
  record_timestamp: string; // '2023-05-15T16:13:49.883Z';
}

export interface FacetGroupDTO {
  name:  string; //'type_tournage';
  facets:
    {
      name: string; // 'Long m\u00e9trage';
      count: number; // 6474;
      state: string; // 'displayed';
      path: string; // 'Long m\u00e9trage';
    }[];
}
