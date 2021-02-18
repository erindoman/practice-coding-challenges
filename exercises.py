# Easy
# 1. Palindrome Number

# class Solution(object):
#     def isPalindrome(self, x):
#         return False if x < 0 else x == int(str(x)[::-1])
    
# ------------------------------------------------

# Medium

class Solution(object):
    def findDuplicate(self, paths):
        """
        :type paths: List[str]
        :rtype: List[List[str]]
        """
        if not paths:
            return []
        
        dict_ = defaultdict(list)
        
        for path in paths:
            xPath = path.split()
            
            for x in xPath[1:]:
                dict_[x[x.find('(') +1 : -1]].append('/'.join([xPath[0], x[:x.find("(")]]))
                
        return [i for i in dict_.values() if len(i) > 1]

# ------------------------------------------------

# Hard 

