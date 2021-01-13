import { Widget } from '../../../../api-interfaces/src/lib/api-interfaces';


export class FetchWidgets {
  static readonly type = '[Widget] Fetch All';
  constructor() { }
}

export class FetchWidgetsSuccess {
  static readonly type = '[Widget] Fetch All Success';
  constructor(public widgets: Widget[]) { }
}

export class FetchWidgetsFailure {
  static readonly type = '[Widget] Fetch All Failure';
  constructor(public error: string | any) { }
}

export class CreateWidget {
  static readonly type = '[Widget] Create';

  constructor(public widget: Widget) {
  }
}

export class UpdateWidget {
  static readonly type = '[Widget] Update';

  constructor(public widget: Widget, public id: string) {
  }
}

export class DeleteWidget {
  static readonly type = '[Widget] Delete';

  constructor(public id: string) {
  }
}

export class SelectWidget {
  static readonly type = '[Widget] Select';

  constructor(public widget: Widget) {
  }
}
