:: build application located in app folder, output to package folder
CALL ares-package -o ./package ./app

:: install to MyTV device set-up in webOS studio
CALL ares-install -d MyTv ./package/cz.qecla.moravaclock_1.0.0_all.ipk

:: launch deployed app
CALL ares-launch -d MyTv cz.qecla.moravaclock