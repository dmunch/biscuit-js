rm -rf src/gen_java
antlr DatalogParser.g4 DatalogLexer.g4 -o src/gen_java
javac -classpath /opt/homebrew/Cellar/antlr/4.12.0/antlr-4.12.0-complete.jar src/gen_java/*.java

cd src/gen_java 
grun Datalog authorizer -tokens < ../../test.bcdl
