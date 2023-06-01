import { cache } from 'react';
import 'server-only';

import { FacetGroupDTO, RecordDTO } from '@/lib/data.interface';

const API_URL: string = process.env.API_URL || '';

export interface DatasetResponseDTO {
  nhits: number;
  parameters: unknown;
  records: RecordDTO[];
  facet_groups: FacetGroupDTO[];
}

export const getData = cache(async (): Promise<DatasetResponseDTO> => {
  const res = await fetch(
    `${API_URL}/search/?dataset=lieux-de-tournage-a-paris&q=&facet=annee_tournage&facet=type_tournage&facet=nom_tournage&facet=nom_realisateur&facet=ardt_lieu`
  );

  console.debug('getData', getData);

  return res.json();
});

// TODO: use redux instead.

export async function searchData(query): Promise<RecordDTO[]> {
  const data = await getData();
  console.log('useDataFetch', data);

  return data.records.filter((record: RecordDTO) => {
    return (
      record.fields.ardt_lieu.includes(query) ||
      record.fields.annee_tournage.includes(query) ||
      record.fields.type_tournage.includes(query)
    );
  });
}
