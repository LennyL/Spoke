<h1 align="center">Spoke</h1>

<p align="center"><img width="480" alt="Spoke" src="https://user-images.githubusercontent.com/21111451/66261819-ffd9ff00-e799-11e9-88bf-981d238b4f20.gif"></p>

58agents:

The relevant docker file for building a new image: /RetPageOriginDockerfile , it gave a build error on the arm64 mac, so I ran it on an Ubuntu laptop

The relevant files to change the URL-s for the Architecture and Rock kit:

src/ui/assets/sources/ArchitectureKitSource.js

src/ui/assets/sources/RockKitSource.js

In case of changing these, don't forget to change the Content Security Policies (CSP) in the "58agents-hubs" repository:

/client-service-hubs/components/hubs-ce/mozilla-hubs-ce-chart/charts/spoke/templates/deployment.yaml  config: turkeyCfg_non_cors_proxy_domains

/.clients/config.test-58a.json and other the other customer environments  configs: "RET_CSP_CONNECT_SRC" and "RET_CSP_IMG_SRC"

  **Easily create custom 3D environments for Hubs.**

**[Spoke Documentation](https://github.com/Hubs-Foundation/hubs-docs/blob/master/docs/spoke-creating-projects.md)**

## Features

:telescope: **Discover**: Explore images, videos, and 3D models from around the web, all without opening up a new tab. With media integrations from Sketchfab and Google Poly, you'll be on your way to creating a scene in no time.

:pencil2: **Create**: No external software or 3D modeling experience required - build 3D scenes using the Spoke web editor so you can have a space that's entirely custom to your needs. From a board room to outer space and beyond, your space is in your control.

:tada: **Share**: Invite people to meet in your new space by publishing your content to Hubs immediately. With just a few clicks, you'll have a world of your own to experience and share - all from your browser.

## Contributing

Info on contributing to Spoke and general Spoke development can be found in the [CONTRIBUTING.md](./CONTRIBUTING.md) doc.

Additional developer documentation can be found in the [docs](./docs/README.md) folder.

## Credits

Parts of this project are derived from the [three.js editor](https://threejs.org/editor/)
with thanks to [Mr.doob](https://github.com/mrdoob) and three.js' many contributors.

Navigation mesh generation via recast.wasm, thanks to [Recast](https://github.com/recastnavigation/recastnavigation) and but0n's [RecastCLI wrapper](https://github.com/but0n/recastCLI.js).

See the [LICENSE](LICENSE) for details.
