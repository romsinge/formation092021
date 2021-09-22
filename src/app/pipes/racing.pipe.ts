import { Pipe, PipeTransform } from '@angular/core';
import { Poney } from '../models/poney.model';

@Pipe({
  name: 'racing',
})
export class RacingPipe implements PipeTransform {
  transform(ponies: Poney[], poneyIds: string[] = []): Poney[] {
    return ponies.filter((poney) => poneyIds.includes(poney?.id || ''));
  }
}
