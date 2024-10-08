import KitSource from "../KitSource";
import { TransformPivot } from "../../../editor/controls/SpokeControls";

export default class RockKitSource extends KitSource {
  constructor(api) {
    super(api, "https://public-58agents-hubs.s3.eu-central-1.amazonaws.com/RocksKit_v2/RocksKit_v2-f259c85a5e6091bd72eac7e2fdca177209613f1b.gltf");
    this.id = "rock-kit";
    this.name = "Rock Kit";
    this.transformPivot = TransformPivot.Selection;
  }
}
