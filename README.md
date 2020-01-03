# ZFS-Usage Applet

This is a Simple Cinnamon Applet that shows the used space in you ZFS pool. It works in Linux Mint 19.2 and 19.3.
Have not tested it anywhere else.

## Installing

1. Clone the repo
2. Copy all files in your home directory under `~/local/share/cinnamon/applets/zfs-usage 
3. Restart your Cinnamon desktop environment (or your Operating System).

### Prerequisites

You must have zfs installed, and the `zpool` command must be avialble, as it is what is used.

## Authors

* **Omar Baqueiro** - *Initial work* - [obaqueiro[(https://github.com/obaqueiro)


## License

This project is licensed under the GPL  - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* I am using an icon found [here](https://www.ixsystems.com/blog/why-we-use-zfs/). If you own it and get angry about this, pelase let me know. 

* Cinnamon Applets documentation kind of sucks (http://lira.epac.to:8080/doc/cinnamon/cinnamon-js/ )... but hey it is kind of straightforward.


## TODOs

I want to:
* Add a chart in the icon (like System Monitor)
* Add configuraton for refresh time (currently hardcoded to 5s) and what to show

