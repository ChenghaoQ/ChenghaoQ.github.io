numlist=[1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,4,5,6,6,6,6,6,6,6,4,3,3,3,3,3,3,3,3,3,3,3,3,4,2,1]

def getmode(numlist):
        list2=sorted(numlist)
        tempnum=list2[0]
        modenum=list2[0]
        modeamount=0
        tempamount=0
                
        for each in list2:
                if tempnum == each:
                        tempamount+=1
                else:
                        tempnum=each
                        tempamount=1
                if modeamount < tempamount:
                        modeamount = tempamount
                        modenum=tempnum
        return modenum
print(getmode(numlist))
